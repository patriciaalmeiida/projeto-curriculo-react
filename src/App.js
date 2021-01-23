import React from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo/personalInfo";
import Header from "./components/Header/header";
import PersonalExpItem from "./components/PersonalExpItem/personalExpItem";

function App() {
  const fakeAPI = {
    nome: "Patricia Almeida",
    ocupacao: "Assistente Adm Bilíngue",
    resumo: "Em transição para carreira de desenvolvimento",
    perfilProfissional: "Futura front-end dev",
    contatos: [
      {
        id: 1,
        tipo: "Telefone",
        contato: "19 99833-8111",
      },
      {
        id: 2,
        tipo: "Email",
        contato: "paty_almeida@live.com",
      },
    ],
    educacao: [
      {
        id: 1,
        instituicao: "Campinas Tech Talents",
        curso: "Front-end development",
      },
      {
        id: 2,
        instituicao: "UNIP",
        curso: "Marketing",
      },
    ],
    experiencia: [
      {
        id: 1,
        cargo: "Assistente Adm Bilíngue",
        periodo: "Outubro 2018 - Atualmente",
        empresa: "Samsung Electronics",
        local: "Campinas",
        conteudo: "Atividades Administrativas",
      },
      {
        id: 2,
        cargo: "Assistente de Facilities Senior",
        periodo: "Fevereiro 2014 - Junho 2018",
        empresa: "Westpac Bank",
        local: "Auckland",
        conteudo: "Organização de Eventos",
      },
    ],
  };

  return (
    <main>
      <Header
        nome={fakeAPI.nome}
        ocupacao={fakeAPI.ocupacao}
        resumo={fakeAPI.resumo}
        perfilProfissional={fakeAPI.perfilProfissional}
      />

      <PersonalInfo contatos={fakeAPI.contatos} educacao={fakeAPI.educacao} />
      <div className="experience">
        <h2>Experiência Profissional</h2>
        {fakeAPI.experiencia.map((item) => {
          return (
            <PersonalExpItem
              cargo={item.cargo}
              periodo={item.periodo}
              empresa={item.empresa}
              local={item.local}
              conteudo={item.conteudo}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
