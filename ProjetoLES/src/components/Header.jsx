import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import BotaoLogin from '../components/BotaoLogin.jsx';
import BotaoOpcoes from '../components/BotaoOpcoes.jsx'; // Importe o BotaoOpcoes
import BotaoProfile from '../components/BotaoProfile.jsx'; // Importe o BotaoProfile

const Header = ({ tipoBotao, tipoUsuario }) => {
  // Define o botão com base no tipo de usuário e na página
  const BotaoComponent = tipoUsuario === 'colaborador' ? BotaoProfile : (tipoBotao ? BotaoOpcoes : BotaoLogin);

  return (
    <header className="header">
      <h1><Link to="/">MARTHE</Link></h1>
      <Nav BotaoComponent={BotaoComponent} tipoUsuario={tipoUsuario} />
    </header>
  );
};

export default Header;