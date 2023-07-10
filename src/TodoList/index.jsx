import "../TodoList/todoList.css";

export function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}
