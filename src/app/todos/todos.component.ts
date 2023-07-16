import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState, carregarTodos } from './todos.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  constructor(private readonly store: Store<{ todos: ITodoState }>) {}

  todos$ = this.store.select('todos').pipe(map(({ todos }) => todos))

  ngOnInit(): void {
    this.store.dispatch(carregarTodos({ limit: 10, page: 1 }));
  }

}
