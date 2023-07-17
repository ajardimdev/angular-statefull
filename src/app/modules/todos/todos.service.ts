import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo, ITodoRequest } from './todos.model';

@Injectable()
export class TodosService {
  constructor(private readonly client:HttpClient) { }

  carregarTodos({ limit, page, title_like, done_like } : ITodoRequest) {
    const endpoint = 'https://jsonplaceholder.typicode.com/todos'

    let params = new HttpParams()
    params = params.append('_limit', limit ?? 10)
    params = params.append('_page', page ?? 1)

    if (!!title_like)
      params = params.append('title_like', title_like ?? 1)

    if (!!done_like)
      params = params.append('completed_like', done_like)

    return this.client
      .get<ITodo[]>(endpoint, { params })
  }
}
