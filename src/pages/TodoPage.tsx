import TodoItem from "../components/TodoItem";
import { TodoItemType } from "../types";
import { useTodos } from "../hooks/useTodos";


const TodoPage = (): JSX.Element => {
  const userId: number = 1;
  const { todos, isLoading, isError } = useTodos(userId) 
 
  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Some error has happened</p>

  return(
    <>
      <h1>Your Todos</h1>
      {todos.todos.map( (item: TodoItemType) => 
        <TodoItem completed={item.completed} key={item.id}>
          {item.todo}
        </TodoItem>
      )}
    </>
  )
}

export default TodoPage;