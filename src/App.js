import React from "react";

import "./style.css";
import Nome from './comp/Nome'
import Topo from './comp/Topo'
import Imagem from './comp/Imagem'
export default function App() {
  return (
    <div className="principal">
      <Topo/> 
      <Imagem/>
      <p> IMC é a sigla de Índice de Massa Corporal, um parâmetro que é utilizado para avaliar se o peso está dentro do valor ideal para a altura.</p>
      <Nome/>
    </div>
  );
}
