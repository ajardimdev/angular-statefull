import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ITodoState, carregarTodos, carregarTodosSucesso } from './todos.state';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { ITodo } from './todos.model';
import { TodosService } from './todos.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class GridEffectsService {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<{ todos: ITodoState }>,
    private readonly gridService: TodosService,
  ) { }

  carregaTodos = createEffect(
    () => this.actions$
      .pipe(
        ofType(carregarTodos),
        withLatestFrom(
          this.store.select('todos')
            .pipe(map((state) => state))
        ),
        switchMap(([{ request }, {todos, page, limit, title_like, done_like}]) => {
          const shouldRevalidate =
            request.page !== page ||
            request.limit !== limit ||
            request.title_like !== title_like ||
            request.done_like !== done_like ||
            request.revalidate

          if (shouldRevalidate) {
            return this.gridService.carregarTodos(request)
              .pipe(map((todos:ITodo[]) => carregarTodosSucesso({
                todos,
                limit: request.limit,
                page: request.page,
                title_like: request.title_like,
                done_like: request.done_like
              })))
          }
          return of(carregarTodosSucesso({todos, limit, page}))
        })
      )
    )
}
