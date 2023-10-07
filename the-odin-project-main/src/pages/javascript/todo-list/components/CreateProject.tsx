import React, { useState } from "react";
import TodoItem from "../models/TodoItem";
import TodoProject from "../models/TodoProject";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const defaultProject: TodoProject = {
  id: "",
  name: "",
  todos: [],
};
interface CreateProjectProps {
  addProject: (project: TodoProject) => void;
}

export default function CreateProject({ addProject }: CreateProjectProps) {
  const [newProject, setProject] = useState<TodoProject>(defaultProject);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProject((prevState: TodoProject) => ({ ...prevState, [name]: value }));
  }

  function handleTodos(newTodo: TodoItem) {
    const todosList: TodoItem[] = [...newProject.todos];
    todosList.push(newTodo);
    setProject((prev) => ({ ...prev, todos: todosList }));
  }

  function updateTodo(todo: TodoItem, index: number) {
    const todosList: TodoItem[] = [
      ...newProject.todos.slice(0, index),
      todo,
      ...newProject.todos.slice(index + 1),
    ];
    setProject((prev) => ({ ...prev, todos: todosList }));
  }

  return (
    <div className="text-gray-700 flex flex-col gap-4 m-auto ">
      <div className="bg-blue-700 py-4 px-4 rounded-xl">
        <h2 className="text-white text-2xl">Project</h2>
        <div className="flex flex-col gap-4">
          <div className="">
            <label
              htmlFor="name"
              className="px-2 inline-block w-1/3 text-white"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={newProject?.name || ""}
              className={`form-input focus:outline-none focus:ring-1 focus:ring-green-600 rounded`}
            />
            <input
              type="button"
              value="Add"
              className="bg-blue-400 hover:bg-blue-500 rounded px-4 py-2 text-white font-bold ml-4"
              onClick={(e) => {
                if (e.currentTarget.value.length === 0) {
                  alert("The name has no name");
                  return;
                }
                addProject(newProject);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-blue-700 rounded-xl px-4 py-4 gap-4">
        <h3 className="text-white mx-auto text-xl tracking-wide">
          TODOs of the project
        </h3>
        <div className="bg-blue-500 p-2 rounded">
          <CreateTodo handleNewTodo={handleTodos} />
        </div>
        <div className="flex flex-col gap-2">
          {newProject.todos.map((todo, i) => {
            return <Todo todo={todo} index={i} setTodo={updateTodo} />;
          })}
        </div>
      </div>
    </div>
  );
}
