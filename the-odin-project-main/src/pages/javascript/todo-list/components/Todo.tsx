// TODO: Add capacibility to circle priority

import formatDistanceToNow from "date-fns/formatDistanceToNowStrict";
import React from "react";
import MemoHigh from "../icons/High";
import MemoLow from "../icons/Low";
import MemoMedium from "../icons/Medium";
import TodoItem, { Priority } from "../models/TodoItem";

interface TodoProps {
  todo: TodoItem;
  //TODO: Change implementation for work with of todo.id instead
  setTodo: (todo: TodoItem, index: number) => void;
  index: number;
}

export default function Todo({ todo, setTodo, index }: TodoProps) {
  return (
    <div
      key={index}
      className={`flex justify-between h-11 w-full  rounded overflow-auto ${
        todo.finalized
          ? "line-through  text-gray-200 bg-gray-500"
          : "bg-gray-400 "
      }`}
    >
      <div
        className={`flex gap-2 py-2 px-4 ${
          todo.finalized ? "line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          name="finalized"
          className="self-center focus:outline-none h-6 w-6 mr-2"
          onChange={() => {}}
          checked={todo.finalized}
          onClick={(e) => {
            const modifiedTodo: TodoItem = {
              ...todo,
              finalized: !todo.finalized,
            };
            setTodo(modifiedTodo, index);
          }}
        />
        <h4 className={`overflow-hidden text-xs md:text-base self-center`}>
          {todo.name}
        </h4>
        <span className="text-green-700 overflow-hidden text-xs md:text-base self-center">
          {formatDistanceToNow(todo.dueDate, { addSuffix: true })}
        </span>
      </div>
      <button className="h-11 w-11 rounded bg-black">
        {todo.priority === Priority.LOW ? (
          <MemoLow className="text-blue-400  rounded" />
        ) : todo.priority === Priority.MEDIUM ? (
          <MemoMedium className="text-yellow-400 rounded" />
        ) : (
          todo.priority === Priority.HIGH && (
            <MemoHigh className="text-red-400" />
          )
        )}
      </button>
    </div>
  );
}
