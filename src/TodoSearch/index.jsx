import { useContext } from "react";
import { TodoContext } from "../TodoContext";

import "../TodoSearch/todoSearch.css";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar Tareas"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
