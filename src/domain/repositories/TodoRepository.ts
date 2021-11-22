import Todo from "../entities/Todo"

export default interface TodoRepository {
    GetTodos(): Promise<Todo[]>
}
