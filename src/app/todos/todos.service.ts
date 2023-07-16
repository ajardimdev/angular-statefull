import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo, ITodoRequest } from './todos.model';

@Injectable()
export class TodosService {
  constructor(private readonly client:HttpClient) { }

  carregarTodos({ limit, page } : ITodoRequest) {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos'

    let params = new HttpParams()
    params = params.append('_limit', limit ?? 10)
    params = params.append('_page', page ?? 1)

    return this.client
      .get<ITodo[]>(endpoint, { params })
  }
}
