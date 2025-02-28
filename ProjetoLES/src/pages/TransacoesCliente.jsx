import React from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';
import Header from '../components/Header.jsx';
import '../styles/Transacoes.css';

const Transacoes = () => {
  // Itens do breadcrumb
  const breadcrumbItems = [
    { label: 'Clientes', link: '/consultar-clientes' },
    { label: 'Editar', link: '/editar-cliente' },
    { label: 'Mario Severino dos Santos Oliveira', link: '/consultar-clientes//editar-cliente/{id}' },
    { label: 'Transações', link: '' }, 
  ];

  return (
    <div>
      <Header tipoUsuario="colaborador" tipoBotao="BotaoProfile" />
      <div className="transacoes-container">
        <Breadcrumb items={breadcrumbItems} />
        <h1>Transações</h1>
        {/* Conteúdo da tela de Transações */}
      </div>
    </div>
  );
};

export default Transacoes;