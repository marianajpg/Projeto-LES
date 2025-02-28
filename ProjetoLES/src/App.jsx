import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ShopCamisetas from './pages/ShopCamisetas.jsx';
import IaRecomenda from './pages/IARecomenda.jsx';
import Login from './pages/Login.jsx';
import CadastroCliente from './pages/CadastroCliente.jsx';
import ConsultaClientes from './pages/ConsultaClientes.jsx';
import EditarCliente from './pages/EditarCliente.jsx';
import ConsultaCamisetas from './pages/ConsultaCamisetas.jsx';

import './App.css';

function App() {
  

  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camisetas" element={<ShopCamisetas />} />
          <Route path="/ia-recomenda" element={<IaRecomenda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route path="/consultar-cliente" element={<ConsultaClientes />} />
          <Route path="/consultar-cliente/editar-cliente/:id" element={<EditarCliente />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/consultar-camisetas" element={<ConsultaCamisetas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;