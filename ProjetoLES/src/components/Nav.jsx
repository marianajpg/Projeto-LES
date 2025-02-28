import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ BotaoComponent, tipoUsuario }) => (
  <nav className="nav">
    <ul>
      {/* Links comuns para ambos os tipos de usuários */}
      <li><Link to="/ia-recomenda">IA RECOMENDA</Link></li>

      {/* Links específicos para clientes */}
      {tipoUsuario === 'cliente' && (
        <li><Link to="/camisetas">CAMISETAS</Link></li>
      )}

      {/* Links específicos para colaboradores */}
      {tipoUsuario === 'colaborador' && (
        <>
          <li><Link to="/clientes">CLIENTES</Link></li>
          <li><Link to="/relatorios">RELATÓRIOS</Link></li>
          <li><Link to="/pedidos">PEDIDOS</Link></li>
          <li><Link to="/consultar-camisetas">CAMISETAS</Link></li>
        </>
      )}

      {/* Botão dinâmico (BotaoLogin, BotaoOpcoes ou BotaoProfile) */}
      {BotaoComponent && <BotaoComponent />}
    </ul>
  </nav>
);

export default Nav;