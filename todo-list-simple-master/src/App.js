import React, { useReducer} from "react";
import { v4 } from "uuid";
import Todo from "./components/todo/Todo";
import { todosReducer } from "./reduces/todos.reduce";

export const Priority = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
};

export const TodoPlaceholder = {
  id: v4(),
  name: "Test",
  completed: false,
  priority: Priority.Low,
  dueDate: new Date().toISOString().substring(0, 16),
};

function App() {
  const [todos, dispatch] = useReducer(todosReducer, [TodoPlaceholder])

  return (
    <div className="min-w-full">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}  dispatch={dispatch}/>
      ))}
    </div>
  );
}

export default App;
