import { useState } from 'react';

export interface Todo {
  id: number;
  task: string;
}

const useTodoHooks = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const editTodo = (editedTodo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === editedTodo.id ? { ...todo, task: editedTodo.task } : todo
      );
      return updatedTodos;
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, editTodo, deleteTodo };
};

export default useTodoHooks;
