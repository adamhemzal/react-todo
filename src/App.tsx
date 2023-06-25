import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import CreateTodoPage from "./pages/CreateTodoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="todos" element={<TodoPage />} />
          <Route path="create" element={<CreateTodoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
