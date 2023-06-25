import { FormEvent, useState } from "react";
import Input from "../components/Input";
import { TodoItemType } from "../types";

const CreateTodoPage = (): JSX.Element => {
  const [inputState, setInputState] = useState<string>()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const newTodo: TodoItemType = {
      todo: inputState as string,
      completed: false,
    }

    try {      
      const createTodo = await fetch(import.meta.env.VITE_TODO_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo)
      })
    } catch (err) {
      throw err;
    }
  }

  return(
    <>
      <h1>Create a new Todo</h1>
      <form onSubmit={handleSubmit}>
        <Input onInputChange={(value: string) => setInputState(value)}/>
        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default CreateTodoPage;