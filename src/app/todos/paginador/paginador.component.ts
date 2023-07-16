import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState, carregarTodos } from '../todos.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.sass']
})
export class PaginadorComponent {
  constructor(private readonly store: Store<{todos:ITodoState}>) {}

  todos$ = this.store.select('todos')
    .pipe(map(({todos, page, limit}) => {
      this.pagina = page
      this.limite = limit
      return todos
    }))

  pagina: number = 1
  limite: number = 10

  carregarTodos = () => {
    this.store.dispatch(
      carregarTodos({ page: this.pagina, limit: this.limite }))
  }

  onLimitChange = (event: Event) => {
    event.preventDefault()
    this.pagina = 1
    this.limite = Number((event.target as HTMLInputElement).value)
    this.carregarTodos()
  }

  proximaPagina = (event: Event) => {
    event.preventDefault()

    this.pagina++
    this.carregarTodos()
  }

  paginaAnterior = (event: Event) => {
    event.preventDefault()

    if (this.pagina === 1) {
      return
    }

    this.pagina--
    this.carregarTodos()
  }


}
