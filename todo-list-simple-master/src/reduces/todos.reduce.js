import { TodoTypes } from "./todos.action";

export const todosReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case TodoTypes.COMPLETE:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      case TodoTypes.UPDATE:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return payload.todoUpdated
        }
        return todo
      })
    case TodoTypes.DELETE:
      return state.filter(todo => todo.id !== payload.id)
    default:
      break;
  }
};
