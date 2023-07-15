import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  constructor(private readonly client:HttpClient) { }

  carregarTodos() {
    return this.client.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
