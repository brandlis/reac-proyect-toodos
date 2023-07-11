import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

import "./todoCounter.css";

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <div>
      <h1 className="TodoCounter">
        <p className="contador">
          Pendientes <span>{totalTodos}</span>
        </p>
        <p className="contador">
          Completadas <span>{completedTodos}</span>
        </p>
      </h1>
    </div>
  );
}
