import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import AbasFiltro from '../components/AbasFiltro.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import axios from 'axios';

import '../styles/EditarCliente.css';

const EditarCliente = () => {
  const location = useLocation();
  const { cliente } = location.state || {};
  const [abaAtiva, setAbaAtiva] = useState('editar');
  const [status, setStatus] = useState(cliente?.status || 'ativo'); 

  // Lista de abas
  const abas = [
    { id: 'editar', label: 'Editar' },
    { id: 'transacoes', label: 'Transações' },
  ];

  const breadcrumbItems = [
    { label: 'Clientes', link: '/consultar-cliente' },
    { label: 'Editar', link: '' },
  ];

  // Estados para os campos editáveis
  const [formData, setFormData] = useState({
    nome: cliente?.nome || '',
    cpf: cliente?.cpf || '',
    dataNascimento: cliente?.dataNascimento || '',
    telefone: cliente?.telefone || '',
    email: cliente?.email || '',
    enderecoEntrega: {
      rua: cliente?.enderecoEntrega?.rua || '',
      cep: cliente?.enderecoEntrega?.cep || '',
      numero: cliente?.enderecoEntrega?.numero || '',
      cidade: cliente?.enderecoEntrega?.cidade || '',
      uf: cliente?.enderecoEntrega?.uf || '',
    },
    enderecoCobranca: {
      mesmoEndereco: true,
      rua: cliente?.enderecoCobranca?.rua || '',
      cep: cliente?.enderecoCobranca?.cep || '',
      numero: cliente?.enderecoCobranca?.numero || '',
      cidade: cliente?.enderecoCobranca?.cidade || '',
      uf: cliente?.enderecoCobranca?.uf || '',
    },
  });

  const [ufs, setUfs] = useState([]);
  const [cidadesEntrega, setCidadesEntrega] = useState([]);
  const [cidadesCobranca, setCidadesCobranca] = useState([]);
  const [ufSelecionadoEntrega, setUfSelecionadoEntrega] = useState('');
  const [ufSelecionadoCobranca, setUfSelecionadoCobranca] = useState('');

  // Busca os estados da API do IBGE
  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setUfs(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar estados:", error);
      });
  }, []);

  // Busca as cidades da UF selecionada para entrega
  useEffect(() => {
    if (ufSelecionadoEntrega) {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionadoEntrega}/municipios`)
        .then((response) => {
          setCidadesEntrega(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar cidades para entrega:", error);
        });
    }
  }, [ufSelecionadoEntrega]);

  // Busca as cidades da UF selecionada para cobrança
  useEffect(() => {
    if (ufSelecionadoCobranca) {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionadoCobranca}/municipios`)
        .then((response) => {
          setCidadesCobranca(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar cidades para cobrança:", error);
        });
    }
  }, [ufSelecionadoCobranca]);

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com mudanças no endereço de entrega
  const handleEnderecoEntregaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      enderecoEntrega: {
        ...prevState.enderecoEntrega,
        [name]: value,
      },
    }));
  };

  // Função para lidar com mudanças no endereço de cobrança
  const handleEnderecoCobrancaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      enderecoCobranca: {
        ...prevState.enderecoCobranca,
        [name]: value,
      },
    }));
  };

  // Função para lidar com o checkbox "Mesmo Endereço de Entrega"
  const handleMesmoEnderecoChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      enderecoCobranca: {
        ...prevState.enderecoCobranca,
        mesmoEndereco: !prevState.enderecoCobranca.mesmoEndereco,
        rua: prevState.enderecoCobranca.mesmoEndereco ? '' : prevState.enderecoEntrega.rua,
        cep: prevState.enderecoCobranca.mesmoEndereco ? '' : prevState.enderecoEntrega.cep,
        numero: prevState.enderecoCobranca.mesmoEndereco ? '' : prevState.enderecoEntrega.numero,
        cidade: prevState.enderecoCobranca.mesmoEndereco ? '' : prevState.enderecoEntrega.cidade,
        uf: prevState.enderecoCobranca.mesmoEndereco ? '' : prevState.enderecoEntrega.uf,
      },
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados atualizados:', { ...formData, status });
    // lógica para enviar os dados atualizados para o backend
  };

  if (!cliente) {
    return <div>Cliente não encontrado.</div>;
  }

  return (
    <div>
      <Header tipoUsuario="colaborador" tipoBotao="BotaoProfile" />
      <Breadcrumb items={breadcrumbItems} />
      <div className="editar-cliente-container">
        <h1>Cliente: {formData.nome}</h1>
        <AbasFiltro abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} abas={abas} />
        <form onSubmit={handleSubmit}>
          {/* Grupo: Informações Pessoais */}
          <fieldset className="editar-cliente-fieldset">
            <legend className="editar-cliente-legend">Informações Pessoais</legend>
            <div className="editar-cliente-form-group">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome Completo"
              />
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="CPF"
              />
              <input
                type="text"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                placeholder="Data de Nascimento"
              />
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Telefone"
              />
            </div>
          </fieldset>

          {/* Grupo: Endereço de Entrega */}
          <fieldset className="editar-cliente-fieldset">
            <legend className="editar-cliente-legend">Endereço de Entrega</legend>
            <div className="editar-cliente-form-group">
              <input
                type="text"
                name="rua"
                value={formData.enderecoEntrega.rua}
                onChange={handleEnderecoEntregaChange}
                placeholder="Rua"
              />
              <input
                type="text"
                name="cep"
                value={formData.enderecoEntrega.cep}
                onChange={handleEnderecoEntregaChange}
                placeholder="CEP"
              />
              <input
                type="text"
                name="numero"
                value={formData.enderecoEntrega.numero}
                onChange={handleEnderecoEntregaChange}
                placeholder="Número"
              />
              <select
                className="cadastro-select"
                name="uf"
                value={formData.enderecoEntrega.uf}
                onChange={(e) => {
                  setUfSelecionadoEntrega(e.target.value);
                  handleEnderecoEntregaChange(e);
                }}
                required
              >
                <option value="">Selecione o estado</option>
                {ufs.map((uf) => (
                  <option key={uf.id} value={uf.sigla}>
                    {uf.nome}
                  </option>
                ))}
              </select>
              <select
                className="cadastro-select"
                name="cidade"
                value={formData.enderecoEntrega.cidade}
                onChange={handleEnderecoEntregaChange}
                required
              >
                <option value="">Selecione a cidade</option>
                {cidadesEntrega.map((cidade) => (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* Grupo: Endereço de Cobrança */}
          <fieldset className="editar-cliente-fieldset">
            <legend className="editar-cliente-legend">Endereço de Cobrança</legend>
            <div className="editar-cliente-form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.enderecoCobranca.mesmoEndereco}
                  onChange={handleMesmoEnderecoChange}
                  className="editar-cliente-checkbox"
                />
                <span className="editar-cliente-checkbox-custom"></span>
                Mesmo endereço de entrega
              </label>

              {!formData.enderecoCobranca.mesmoEndereco && (
                <>
                  <input
                    type="text"
                    name="rua"
                    value={formData.enderecoCobranca.rua}
                    onChange={handleEnderecoCobrancaChange}
                    placeholder="Rua"
                  />
                  <input
                    type="text"
                    name="cep"
                    value={formData.enderecoCobranca.cep}
                    onChange={handleEnderecoCobrancaChange}
                    placeholder="CEP"
                  />
                  <input
                    type="text"
                    name="numero"
                    value={formData.enderecoCobranca.numero}
                    onChange={handleEnderecoCobrancaChange}
                    placeholder="Número"
                  />
                  <select
                    className="cadastro-select"
                    name="uf"
                    value={formData.enderecoCobranca.uf}
                    onChange={(e) => {
                      setUfSelecionadoCobranca(e.target.value);
                      handleEnderecoCobrancaChange(e);
                    }}
                    required
                  >
                    <option value="">Selecione o estado</option>
                    {ufs.map((uf) => (
                      <option key={uf.id} value={uf.sigla}>
                        {uf.nome}
                      </option>
                    ))}
                  </select>
                  <select
                    className="cadastro-select"
                    name="cidade"
                    value={formData.enderecoCobranca.cidade}
                    onChange={handleEnderecoCobrancaChange}
                    required
                  >
                    <option value="">Selecione a cidade</option>
                    {cidadesCobranca.map((cidade) => (
                      <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </fieldset>

          {/* Grupo: Login */}
          <fieldset className="editar-cliente-fieldset">
            <legend className="editar-cliente-legend">Login</legend>
            <div className="editar-cliente-form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
            </div>
          </fieldset>

          {/* Botões de Status */}
          <div className="status-botoes">
            <button
              type="button"
              className={`status-botao ${status === 'ativo' ? 'ativo' : ''}`}
              onClick={() => setStatus('ativo')}
            >
              Ativado
            </button>
            <button
              type="button"
              className={`status-botao ${status === 'desativado' ? 'desativado' : ''}`}
              onClick={() => setStatus('desativado')}
            >
              Desativado
            </button>
          </div>

          {/* Botões de Ação */}
          <div className="editar-cliente-botoes-acoes">
            <button type="submit">EDITAR</button>
            <Link to="/consultar-cliente">
              <button type="button">CANCELAR</button>
            </Link>
            <button type="button">LIMPAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarCliente;