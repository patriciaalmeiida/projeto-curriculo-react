import React from "react";

function Header(props) {
  // Props
  const { nome, ocupacao, resumo, perfilProfissional } = props;

  return (
    <>
      <div className="perfil">
        <img
          src="https://scontent.fcpq3-1.fna.fbcdn.net/v/t1.0-9/85206034_2772139212866179_7417482836011122688_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF_W-5EiWtb6iGQbdmgjoFU0ipCv__vak_SKkK__-9qT5J0tyiZa4ESUbOg4OfCHvYskuVwGCI7taQcVkPQ2NAt&_nc_ohc=yjOJq8UZ0x8AX8L8oIs&_nc_ht=scontent.fcpq3-1.fna&oh=83495d20d9b181b4713d2a1d15675d5e&oe=603367E5"
          alt="Perfil"
        />
      </div>
      <div className="biografia">
        <h1>{nome}</h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>{perfilProfissional}</p>
      </div>
    </>
  );
}

export default Header;
