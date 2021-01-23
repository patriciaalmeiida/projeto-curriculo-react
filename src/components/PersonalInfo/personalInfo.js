import React, { useState } from "react";

function PersonalInfo(props) {

  // Props
  const { contatos, educacao } = props;

  // Estado
  const [mostrarContatos, setMostraContatos] = useState(false);

  // Funcao que alterao estado
  const toggleContatos = () => {
    console.log("hahaha")
    setMostraContatos(!mostrarContatos);
  };

  return (
    // Código HTML retirado do App.js
    <aside>
      <div className="sidebar">
        <h3>Contatos</h3>

        <button onClick={() => toggleContatos()}>Mostrar Contatos</button>
        {mostrarContatos && (
          <div className="lista-de-contatos">
            {contatos.map((contato) => {
              return <li key={contato.id}>
                <div className="item-contato">
                  <h4>{contato.tipo}</h4>
                  <p>{contato.contato}</p>
                </div>
              </li>;
            })}
          </div>
        )}
      </div>
      <div className="sidebar">
        <h3>Educação</h3>
        <div className="lista-de-formacao">
          <li>
            <h4>Campinas Tech Talents</h4>
            <p>Front-end developer 2021 - 2021</p>
          </li>
          <li>
            <h4>UNIP</h4>
            <p>Marketing 2020 - 2022</p>
          </li>
        </div>
      </div>
    </aside>
  );
}

export default PersonalInfo;
