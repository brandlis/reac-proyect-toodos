import React from "react";
import "../CreateTodoButton/todobtn.css";

export function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      title="Agregar"
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}
