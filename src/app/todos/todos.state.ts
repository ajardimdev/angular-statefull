import { createAction, createReducer, on } from "@ngrx/store"
import { ITodo } from "./todos.model"

export interface IGridState {
  todos: ITodo[]
}

const gridInitialState: IGridState = {
  todos: []
}

export const carregarTodos = createAction('[Grid] Carregar todos')

export const carregarTodosSucesso = createAction('[Grid] Carregar todos sucesso',
  (todos: ITodo[]) => ({ todos }))

export const gridReducer = createReducer(
  gridInitialState,
  on(carregarTodosSucesso, (state, { todos }) => ({ ...state, todos }))
)
