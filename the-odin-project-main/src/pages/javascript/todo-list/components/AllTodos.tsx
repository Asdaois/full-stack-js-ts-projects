import React, { useEffect, useState } from "react";
import { AppData } from "../App";
import TodoItem from "../models/TodoItem";
import Todo from "./Todo";

export default function AllTodos({ projects, unassignedTodos }: AppData) {
  const [combineTodos, setCombineTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const allTodos = projects.map((project) => {
      return project.todos;
    });

    console.log([...allTodos.map((todo) => todo)]);
    let _combineTodos: TodoItem[] = [];

    if (allTodos.length > 0) {
      _combineTodos = allTodos.reduce((a, b, c) => {
        const combineArray = a.concat(...b);
        return combineArray;
      });
      console.log(_combineTodos);
    }
    _combineTodos?.push(...unassignedTodos);
    setCombineTodos(_combineTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {combineTodos.map((todo, i) => {
        return <Todo key={i} index={i} todo={todo} setTodo={() => {}} />;
      })}
    </div>
  );
}
