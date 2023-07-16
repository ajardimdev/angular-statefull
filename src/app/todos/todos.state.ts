import { createAction, createReducer, on } from "@ngrx/store"
import { ITodo, ITodoRequest } from "./todos.model"

export interface ITodoState {
  todos: ITodo[]
  page: number
  limit: number
}

const gridInitialState: ITodoState = {
  todos: [],
  page: 0,
  limit: 0
}

export const carregarTodos = createAction(
  '[Grid] Carregar todos', (request: ITodoRequest) => ({ request }))

export const carregarTodosSucesso = createAction(
  '[Grid] Carregar todos sucesso', (todos: ITodoState) => ({ todos }))

export const todosReducer = createReducer(
  gridInitialState,
  on(carregarTodosSucesso, (state, { todos }) => ({ ...state, ...todos }))
)
