import EmptyImg from "./assets/fndactividad.png";
import "./emptytodos.css";

export function EmptyTodos() {
  return (
    <div className="container">
      <h1 className="container_tittle">
        <span className="tittle">Bienvenido</span> dale click en el simbolo{" "}
        <span className="more">+</span> para iniciar tu lista de actividades.
      </h1>
      <img className="imagen" src={EmptyImg} alt="imagen" />
    </div>
  );
}
