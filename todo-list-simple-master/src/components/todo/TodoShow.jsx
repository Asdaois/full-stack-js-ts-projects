import React from "react";
import TimeAgo from "timeago-react";
import { completeTodo, deleteTodo } from "../../reduces/todos.action";

const TodoShow = ({ todo, handleDoubleClick, dispatch }) => {
  return (
    <div className="flex m-auto gap-2 align-baseline">
      <input
        className="self-center h-6 w-6"
        type="checkbox"
        name="completed"
        value={todo.completed}
        onClick={() => dispatch(completeTodo(todo.id))}
      />
      <div
        className="flex justify-between gap-4 w-full align-baseline"
        onDoubleClick={handleDoubleClick}
      >
        <span>{todo.name}</span>
        <TimeAgo datetime={todo.dueDate} />
        <span>{todo.priority}</span>
      </div>
      <button className="" onClick={() => dispatch(deleteTodo(todo.id))}>
        <span className="text-2xl">&#10007;</span>
      </button>
    </div>
  );
};

export default TodoShow;
