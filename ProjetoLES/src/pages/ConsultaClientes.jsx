import React, { useState } from 'react';
import AbasFiltro from '../components/AbasFiltro.jsx';
import CampoPesquisa from '../components/CampoPesquisa.jsx';
import TabelaClientes from '../components/TabelaClientes.jsx';
import Header from '../components/Header.jsx';
import '../styles/ConsultaClientes.css';

const clientes = [
  { nome: 'Marta Severina dos Santos Oliveira', dataNascimento: 'tej/05/P897', telefone: '13 96544-9965', email: 'maria_severin@photmail.com', status: 'ativo' },
  { nome: 'Paula de Carvalho', dataNascimento: 'tej/05/P897', telefone: '13 96544-9965', email: 'mcasolon@photmail.com', status: 'ativo' },
  { nome: 'Yasmin Noémia Atogão', dataNascimento: 'tej/05/P897', telefone: '13 96544-9965', email: 'mcasolon@photmail.com', status: 'desativado' },
];

function ConsultaClientes() {
  const [abaAtiva, setAbaAtiva] = useState('geral');
  const [termoPesquisa, setTermoPesquisa] = useState('');

  // Lista de abas
  const abas = [
    { id: 'geral', label: 'Geral' },
    { id: 'ativo', label: 'Ativos' },
    { id: 'desativado', label: 'Desativados' },
    // Adicione mais abas conforme necessário
  ];

  const filtrarClientes = (clientes) => {
    return clientes.filter(cliente => {
      const correspondeAba = abaAtiva === 'geral' || cliente.status === abaAtiva;
      const correspondePesquisa = cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                                 cliente.email.toLowerCase().includes(termoPesquisa.toLowerCase());
      return correspondeAba && correspondePesquisa;
    });
  };

  const clientesFiltrados = filtrarClientes(clientes);

  return (
    <div>
      <Header tipoUsuario='colaborador' tipoBotao='BotaoProfile' />
      <div className="consulta-clientes">
        <h1>Consulta de Clientes</h1>
        <AbasFiltro abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} abas={abas} />
        <CampoPesquisa termoPesquisa={termoPesquisa} setTermoPesquisa={setTermoPesquisa} />
        <TabelaClientes clientes={clientesFiltrados} />
      </div>
    </div>
  );
}

export default ConsultaClientes;