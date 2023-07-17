import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState, carregarTodos } from '../todos.state';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.sass']
})
export class PaginadorComponent {
  constructor(private readonly store: Store<{todos:ITodoState}>) {}

  todos$ = this.store.select('todos')
    .pipe(
      tap(({ limit, done_like, title_like }) => {
        if (limit > 0) {
          this.limite = limit
          this.done_like = done_like ?? 'false'
          this.title_like = title_like ?? ''
        }
      }),
      map(({todos}) => todos))

  pagina: number = 1
  limite: number = 10
  done_like: string = 'false'
  title_like: string = ''

  carregarTodos = () => {
    this.store.dispatch(
      carregarTodos({
        page: this.pagina,
        limit: this.limite,
        done_like: this.done_like,
        title_like: this.title_like
      }))
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
