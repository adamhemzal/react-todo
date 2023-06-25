import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<any> = (url: string) => fetch(url).then((res) => res.json());

export function useTodos(userId: number) {
   /*
    const { data, error, isLoading } = useSWR("todos", async () => {
      const res = await fetch("http://localhost:8080/todos/")
      const data = await res.json();
    })
  */
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_TODO_API}/user/${userId}`, 
    fetcher
  );

  return {
    todos: data,
    isLoading,
    isError: error
  }
}
