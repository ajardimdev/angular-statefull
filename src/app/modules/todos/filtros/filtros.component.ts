import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState, carregarTodos } from '../todos.state';
import { map, tap } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.sass']
})
export class FiltrosComponent {
  formulario = this.fb.group({
    titulo: [''],
    status: ['false'],
    page: [1],
    limit: [5],
  })

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<{ todos: ITodoState }>
    ) {}


  todos$ = this.store.select('todos')
    .pipe(
      tap(({ limit, done_like }) => {
        if (limit > 0) {
          this.formulario.patchValue({ limit, status: done_like ?? 'false' })
        }
      }),
      map(({todos}) => todos))
    .subscribe()

  statusOptions = [{ label: 'Pendente', value: false }, { label: 'Concluído', value: true }]

  carregarTodos(event: Event): void {
    event.preventDefault()

    const title_like = this.formulario.get('titulo')?.value ?? undefined
    const done_like = this.formulario.get('status')?.value ?? undefined
    const page = this.formulario.get('page')?.value ?? 1
    const limit = this.formulario.get('limit')?.value ?? 5

    this.store.dispatch(

      carregarTodos({
        page,
        limit,
        title_like,
        done_like
      }))

    }
  cleannup(event: Event): void {
    event.preventDefault()

    this.formulario.reset({
      titulo: '',
      status: 'false',
      limit: this.formulario.get('limit')?.value ?? 5,
    })
    this.carregarTodos(event)

    this.carregarTodos(event)
  }
}
