import Header from "./Header";
import Form from "./Form";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [tipoMusica, setTipoMusica] = useState("");
  const [errore, setErrore] = useState("");
  function handleValidacion(nombre, tipoMusica) {
    const nuevoNombre = nombre;
    const nuevoTipo = tipoMusica;
    setNombre(nuevoNombre);
    setTipoMusica(nuevoTipo);
  }

  return (
    <div>
      <Header title="Musica" />
      <Form
        onError={() =>
          setErrore("informacion incorrecta")
        }
        onSubmit={handleValidacion}
      />
      {errore}
      <hr />
      <h2>Hola {nombre}</h2>
      <p>escuchas musica {tipoMusica}</p>
    </div>
  );
}

export default App;
