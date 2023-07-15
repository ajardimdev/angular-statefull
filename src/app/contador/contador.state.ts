import { createAction, createReducer, on } from "@ngrx/store"

export interface IContadorState {
  counter: number
}

const initialContadorState: IContadorState = {
  counter: 3
}

export const incrementaContador = createAction('[Contador] Incrementa contador')
export const decrementaContador = createAction('[Contador] Decrementa contador')

export const contadorReducer = createReducer(
  initialContadorState,
  on(incrementaContador, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrementaContador, (state) => ({ ...state, counter: state.counter - 1 }))
)
