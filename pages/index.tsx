import type { NextPage } from "next";
import React, { useState } from "react";
import { Todo } from "../src/types";
import { Input } from "../src/components/Input";
import { Button } from "../src/components/Button";
import { TodoList } from "../src/components/TodoList";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      done: false,
    };
    setTodos((s) => [newTodo, ...s]);
    setTitle("");
  };

  const toggleTodo = (id: number) => {
    setTodos((s) => s.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos((s) => s.filter((t) => t.id !== id));
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Todo（Day2: ローカル state）</h1>

        <div className="flex gap-2 mb-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タスクを入力"
          />
          <Button onClick={addTodo}>追加</Button>
        </div>

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </main>
  );
};

export default Home;
