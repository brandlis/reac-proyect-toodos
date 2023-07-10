import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

import "./todoCounter.css";

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <div>
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de
        <span> {totalTodos}</span> TODOs
      </h1>
    </div>
  );
}
