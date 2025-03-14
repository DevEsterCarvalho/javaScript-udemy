import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <>
    <h1 id="nome">Bom dia {props.nome}!</h1>
    <h2>Até Breve!</h2>
  </>
);

/* const BomDia = (props) => ( //para retornar dois elementos envolve em uma div ou com fragment 
  <React.Fragment>
    <h1>Bom dia {props.nome}</h1>
    <h2>Até breve</h2>
  </React.Fragment>
); */
