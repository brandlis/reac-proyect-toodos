import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

import "../styles/normalize.css";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
