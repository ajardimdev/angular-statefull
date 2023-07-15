import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IContadorState, decrementaContador, incrementaContador } from '../contador/contador.state';
import { map } from 'rxjs';
import { IGridState, carregarTodos } from '../todos/todos.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(
    private readonly store: Store<{
      contador: IContadorState,
      grid:IGridState}>
    ) {}

  counter$ = this.store.select('contador')
    .pipe(map(({counter}) => counter))

  todos$ = this.store.select('grid')
    .pipe(map(({todos}) => todos))

  incrementar = () => {
    this.store.dispatch(incrementaContador())
  }

  decrementar = () => {
    this.store.dispatch(decrementaContador())
  }

  carretarTodos(): void {
    this.store.dispatch(carregarTodos())
  }
}
