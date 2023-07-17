export interface ITodo{
  userId: number,
  id: number,
  title: string
  completed: boolean
}

export interface ITodoRequest {
  limit: number
  page: number
  title_like?: string
  done_like?: string
  revalidate?: boolean
}
