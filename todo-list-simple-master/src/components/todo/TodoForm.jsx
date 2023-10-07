import React, { useState } from "react";
import { Priority } from "../../App";
import { getKeysFromObject } from "../../helpers/enumHelpers";
import { updateTodo } from "../../reduces/todos.action";

const getPriorityOptions = () =>
  getKeysFromObject(Priority).map((value, index) => {
    return <option key={index}>{value.toUpperCase()}</option>;
  });

const TodoForm = ({ todoValues, showTodo, dispatch }) => {
  const [newTodo, setNewTodo] = useState({ ...todoValues });

  const handleChangeValues = (e) => {
    const property = (e.target.name);
    const value = (e.target.value);
    setNewTodo({...newTodo, [property]: value})
  };

  return (
    <div className="todo">
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Input a name"
          value={newTodo.name}
          onChange={handleChangeValues}
        />
        <select
          name="priority"
          value={newTodo.priority}
          onChange={handleChangeValues}
        >
          {getPriorityOptions()}
        </select>
        <div className="">
          <label>Due Time: </label>
          <input
            type="datetime-local"
            name="dueDate"
            value={newTodo.dueDate}
            onChange={handleChangeValues}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            showTodo()
            dispatch(updateTodo(newTodo.id, newTodo))
          }}
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
