import { useState } from "react";
import Card from "./Card";

function Form(props) {
  const [nombre, setNombre] = useState("");
  const [tipoMusica, setTipoMusica] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      nombre.startsWith(" ") ||
      nombre.length < 3 ||
      nombre.length < 6
    ) {
      props.onError();
      console.log();
    } else {
      props.onSubmit(nombre, tipoMusica);
    }
  }

  return (
    <Card title="Ingresa tu musica">
      <form onSubmit={handleSubmit}>
        <p>Escribe tu nombre</p>
        <input
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          value={nombre}
        />
        <p>Escribe tu musicata</p>
        <input
          onChange={(e) => setTipoMusica(e.target.value)}
          type="text"
          value={tipoMusica}
        />
        <button type="submit">Enviar</button>
      </form>
    </Card>
  );
}

export default Form;
