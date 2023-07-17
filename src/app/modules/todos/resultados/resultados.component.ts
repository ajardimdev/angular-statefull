import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState } from '../todos.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.sass']
})
export class ResultadosComponent {
  constructor(private readonly store: Store<{ todos: ITodoState }>) {}

  todos$ = this.store.select('todos')
    .pipe(
      map(({ todos }) => todos
        .map(todo => ({
          ...todo, completed: todo.completed ? 'Concluído' : 'Pendente' }))))
}
