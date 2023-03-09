//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Card;
