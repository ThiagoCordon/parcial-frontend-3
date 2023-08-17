import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [alumno, setAlumno] = useState({
    nombre: "",
    animal: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      alumno.nombre.length < 3 ||
      alumno.nombre.startsWith(" ") ||
      alumno.animal.length < 6
    ) {
      setShow(false);
      setError(true);
    } else {
      setShow(true);
      setError(false);
    }
  };

  const handleChange = (event) =>
    setAlumno({ ...alumno, nombre: event.target.value });

  return (
    <>
      <h1>Elige tu animal favorito</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu animal favorito"
          onChange={(event) =>
            setAlumno({ ...alumno, animal: event.target.value })
          }
        />
        <button>ENVIAR</button>

        {error && <h6>Por favor chequea que la información sea correcta</h6>}
        {show ? <Card alumno={alumno} /> : null}
      </form>
    </>
  );
}

export default App;
