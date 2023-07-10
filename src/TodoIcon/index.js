import React from "react";

import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import "../TodoIcon/todoIcon.css";

const typeIcon = {
  check: (color) => (
    <MdOutlineCheckCircleOutline className="Icon-md" fill={color} />
  ),
  delete: (color) => <MdDelete className="Icon-md" fill={color} />,
};

export function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {typeIcon[type](color)}
    </span>
  );
}
