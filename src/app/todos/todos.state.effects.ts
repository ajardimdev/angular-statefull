import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IGridState, carregarTodos, carregarTodosSucesso } from './todos.state';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { ITodo } from './todos.model';
import { GridService } from './todos.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class GridEffectsService {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<{ grid: IGridState }>,
    private readonly gridService: GridService,
  ) { }

  carregaTodos = createEffect(
    () => this.actions$
      .pipe(
        ofType(carregarTodos),
        withLatestFrom(
          this.store.select('grid')
            .pipe(map(({ todos }) => todos))
        ),
        switchMap(([_, todos]) => {
          if (todos.length === 0) {
            return this.gridService.carregarTodos()
              .pipe(map((todos:ITodo[]) => carregarTodosSucesso(todos)))
          }
          return of(carregarTodosSucesso(todos))
        })
      )
    )
}
