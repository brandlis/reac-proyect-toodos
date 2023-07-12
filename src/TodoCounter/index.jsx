import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

import logo from "./assets/pensar.gif";
import logo2 from "./assets/bien.gif";

import "./todoCounter.css";

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <div className="counter_todos">
      {completedTodos === 0 ? (
        <p>
          Aun no tienes tareas completadas <img src={logo} alt="logo" />
        </p>
      ) : (
        <p>
          Te faltan
          <span> {totalTodos - completedTodos}</span> Tareas por cumplir
          <img src={logo2} alt="logo" />
        </p>
      )}
      <p>
        Tareas Totales:
        <span> {totalTodos}</span>
      </p>
    </div>
  );
}
