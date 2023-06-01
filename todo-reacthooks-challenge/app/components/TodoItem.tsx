import React, { useState } from 'react';
import { Todo } from '../hooks/useTodoHooks';

interface TodoItemProps {
  todo: Todo;
  editTodo: (editedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo({
      id: todo.id,
      task,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      ) : (
        <span>{task}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
