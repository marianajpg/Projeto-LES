import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Login.css';
import InfoSection from '../components/InfoSection.jsx';
import Header from '../components/Header.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('cliente'); // Estado para tipo de usuário
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLogin = (event) => {
    event.preventDefault(); // Evita recarregar a página

    // Simulação de login (Substitua por chamada real à API)
    if (userType === 'cliente' && email === 'cliente@email.com' && password === '1234') {
      navigate('/');
    } else if (userType === 'colaborador' && email === 'colaborador@email.com' && password === '1234') {
      navigate('/consultar-cliente');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div>
      <Header tipoUsuario="cliente" tipoBotao="BotaoLogin" />
      <div className='container'>
        <section className="login-section">
          <h2>Entre em sua conta!</h2>
          <div className="user-type">
            <label className='radio-label'>
              <input 
                type='radio' 
                name="user-type" 
                value="cliente"
                checked={userType === 'cliente'} 
                onChange={() => setUserType('cliente')} 
              />
              <span className="radio-custom"></span> Cliente
            </label>

            <label className='radio-label'>
              <input 
                type='radio' 
                name="user-type" 
                value="colaborador"
                checked={userType === 'colaborador'} 
                onChange={() => setUserType('colaborador')} 
              />
              <span className="radio-custom"></span> Colaborador
            </label>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Senha" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <a href="#">Esqueci minha senha</a>
            <button type="submit">ENTRAR</button>
          </form>
          <p>Ainda não possui uma conta? <Link to="/cadastro-cliente">Cadastre-se</Link></p>
        </section>
        <InfoSection />
      </div>
    </div>
  );
}

export default Login;
