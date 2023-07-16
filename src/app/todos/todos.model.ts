export interface ITodo{
  userId: number,
  id: number,
  title: string
  completed: boolean
}

export interface ITodoRequest {
  limit: number
  page: number
}
