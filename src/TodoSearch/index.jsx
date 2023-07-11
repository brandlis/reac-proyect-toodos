import { useContext } from "react";
import { TodoContext } from "../TodoContext";

import "../TodoSearch/todoSearch.css";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar TODOs"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
