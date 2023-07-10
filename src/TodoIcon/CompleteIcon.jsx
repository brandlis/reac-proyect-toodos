import React from "react";
import { TodoIcon } from "../TodoIcon/index";

export function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "blue"}
      onClick={onComplete}
    />
  );
}
