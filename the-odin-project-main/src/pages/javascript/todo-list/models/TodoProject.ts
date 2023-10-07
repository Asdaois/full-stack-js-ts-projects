import TodoItem from "./TodoItem";

export default interface TodoProject {
  name: string;
  id: any;
  todos: TodoItem[];
}
