const Card = ({ alumno }) => {
  return (
    <>
      <h4>Hola {alumno.nombre}!</h4>
      <h4>Sabemos que tu animal favorito es: {alumno.animal}</h4>
    </>
  );
};

export default Card;
