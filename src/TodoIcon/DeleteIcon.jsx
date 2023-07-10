import React from "react";
import { TodoIcon } from "../TodoIcon/index";

export function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}
