import React from "react";
import { Todo } from "../types";
import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  if (!todos.length)
    return <p className="text-sm text-gray-500">タスクがありません</p>;
  return (
    <ul className="divide-y">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};
