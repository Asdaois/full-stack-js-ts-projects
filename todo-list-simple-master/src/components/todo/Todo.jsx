import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoShow from "./TodoShow";

const Todo = ({ todo, dispatch }) => {
  const [isTodoShown, setTodoShown] = useState(true);
  const showForm = () => {
    setTodoShown(false);
  };

  const showTodo = () => {
    setTodoShown(true);
  };

  return (
    <div className="w-2/3 m-auto border py-1 px-2" >
      {isTodoShown ? (
        <TodoShow
          todo={todo}
          handleDoubleClick={showForm}
          dispatch={dispatch}
        />
      ) : (
        <TodoForm showTodo={showTodo} todoValues={todo} dispatch={dispatch} />
      )}
    </div>
  );
};

export default Todo;
