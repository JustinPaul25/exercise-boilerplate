import Todo from "../entities/Todo"

export default interface TodoRepository {
    GetTodos(): Promise<Todo[]>,
    StoreTodo(todo, list): Promise<Todo[]>,
    DeleteTodo(id, list): Promise<Todo[]>,
    UpdateTodo(item, data, list): Promise<Todo[]>
}
