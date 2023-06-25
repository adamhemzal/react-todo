import TodoItem from "../components/TodoItem";
import { TodoItemType } from "../types";
import { useTodos } from "../hooks/useTodos";


const HomePage = (): JSX.Element => {
  const userId: number = 1;
  const { todos, isLoading, isError } = useTodos(userId); 

  if (isLoading) return <p>Loading</p>
  if (isError) return <p>Some error has happened</p>

  return(
    <>
      <h1>What you have to do</h1>
      {todos?.todos
      .filter( (item: TodoItemType) => { return !item.completed})
      .map( (item: TodoItemType) => (
        <TodoItem completed={item.completed} key={item.id}>
          {item.todo}
        </TodoItem>
      ))}
    </>
  )
}

export default HomePage;