import Todo from "../../domain/entities/Todo"
import TodoRepository from "../../domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {
    jsonUrl = "https://jsonplaceholder.typicode.com/users/1/todos"

    async GetTodos(): Promise<Todo[]> {
        const res = await fetch(this.jsonUrl)
        const jsonData = await res.json()
        return jsonData.map((item: Todo) => ({ id: item.id, title: item.title }))
    }
}
