import Todo from "../../domain/entities/Todo"
import TodoRepository from "../../domain/repositories/TodoRepository"

export default class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        return [
            {id: 1, title: 'todo1'},
            {id: 2, title: 'todo2'},
            {id: 3, title: 'todo3'}
        ]
    }
}
