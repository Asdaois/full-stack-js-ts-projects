import React, { useState } from "react";
import TodoItem from "../models/TodoItem";
import TodoProject from "../models/TodoProject";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

interface ProjectProps {
  project: TodoProject;
  id: number;
  updateProject: (project: TodoProject, id: number) => void;
}

export default function Project({ project, id, updateProject }: ProjectProps) {
  const [canAddTodo, setCanAddTodo] = useState(false);

  const handleUpdate = (todo: TodoItem, index: number) => {
    const modifiedProject = { ...project };
    modifiedProject.todos[index] = todo;
    updateProject(modifiedProject, id);
  };

  const addTodo = (todo: TodoItem) => {
    setCanAddTodo(false);
    const modifiedProject = { ...project };
    modifiedProject.todos.push(todo);
    updateProject(modifiedProject, id);
  };

  return (
    <div className="bg-blue-700 p-4 rounded-lg transition-all" key={id}>
      <div className="flex justify-between mb-4">
        <div className="self-center ">{project.name}</div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setCanAddTodo(!canAddTodo);
            }}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            Add Todo
          </button>
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg">
            Delete Project
          </button>
        </div>
      </div>
      <div
        className={`my-2 bg-green-600 p-4 rounded-lg transition-all  ${
          canAddTodo
            ? "block duration-300"
            : "transform translate-x-96 h-0 opacity-0 duration-300 hidden"
        }`}
      >
        <CreateTodo handleNewTodo={addTodo} />
      </div>

      <div className="flex flex-col gap-4">
        {project.todos.map((todo, idTodo) => {
          return (
            <Todo
              index={idTodo}
              todo={todo}
              key={idTodo}
              setTodo={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}
