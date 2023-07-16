import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState, carregarTodos } from '../todos.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.sass']
})
export class FiltrosComponent {
  constructor(private readonly store: Store<{ todos: ITodoState }>) {}

  todos$ = this.store.select('todos')
    .pipe(map(({todos, page, limit}) => {
      this.pagina = page
      this.limite = limit

      return todos
    }))

  pagina: number = 1
  limite: number = 10

  carretarTodos(): void {
    this.store.dispatch(
      carregarTodos({ limit: this.limite, page: this.pagina }))
  }
}
