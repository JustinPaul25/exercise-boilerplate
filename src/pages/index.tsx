import Todo from "domain/entities/Todo"

import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { fetchList } from "../app/redux/todo/asyncTodo.slice"

export default function Home() {
    const { asyncTodos, loading, syncTodos } = useAppSelector((state) => ({
        asyncTodos: state.asyncTodoSlice.asyncTodos,
        loading: state.asyncTodoSlice.loading,
        syncTodos: state.syncTodoSlice.syncTodos
    }))

    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(fetchList())
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                columnGap: 50,
            }}
        >
            <div>
                <h2>Async Reducer</h2>
                <button type="button" onClick={handleClick} disabled={loading}>
                    Refresh
                </button>
                <ul>
                    {asyncTodos.map((item: Todo) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Sync Reducer</h2>
                <div>
                    <ul>
                        {syncTodos.map((todos) => (
                            <li>{todos}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
