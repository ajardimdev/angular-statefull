import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGridState, carregarTodos } from './todos.state';
import { Observable, map } from 'rxjs';
import { ITodo } from './todos.model';

@Component({
  selector: 'app-grid',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class GridComponent {
  constructor(private readonly store: Store<{ grid: IGridState }>) {}

  todos$: Observable<ITodo[]> = this.store.select('grid')
    .pipe(map(({ todos }) => todos))

  carretarTodos(): void {
    this.store.dispatch(carregarTodos())
  }
}
