import React, { useState, useEffect } from 'react';
import '../styles/CadastroCliente.css';
import axios from 'axios';

import Header from '../components/Header.jsx';

function CadastroCliente() {
  const [ufs, setUfs] = useState([]); 
  const [cidadesEntrega, setCidadesEntrega] = useState([]); 
  const [cidadesCobranca, setCidadesCobranca] = useState([]);
  const [ufSelecionadoEntrega, setUfSelecionadoEntrega] = useState(''); 
  const [ufSelecionadoCobranca, setUfSelecionadoCobranca] = useState(''); 

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    enderecoEntrega: '',
    numeroEntrega: '',
    cepEntrega: '',
    cidadeEntrega: '',
    ufEntrega: '',
    enderecoCobrancaIgualEntrega: true,
    enderecoCobranca: '',
    numeroCobranca: '',
    cepCobranca: '',
    cidadeCobranca: '',
    ufCobranca: '',
    email: '',
    senha: '',
    confirmacaoSenha: ''
  });

  // Busca os estados da API do IBGE
  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setUfs(response.data); // Atualiza o estado com os dados da API
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
          setCidadesEntrega(response.data); // Atualiza o estado com as cidades da UF selecionada
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
          setCidadesCobranca(response.data); // Atualiza o estado com as cidades da UF selecionada
        })
        .catch((error) => {
          console.error("Erro ao buscar cidades para cobrança:", error);
        });
    }
  }, [ufSelecionadoCobranca]);

  // Função para lidar com a seleção de UF no endereço de entrega
  function handleInputUfEntrega(event) {
    const ufSelecionada = event.target.value;
    setUfSelecionadoEntrega(ufSelecionada); // Atualiza o estado com a UF selecionada
    setFormData((prevState) => ({
      ...prevState,
      ufEntrega: ufSelecionada,
    }));
  }

  // Função para lidar com a seleção de UF no endereço de cobrança
  function handleInputUfCobranca(event) {
    const ufSelecionada = event.target.value;
    setUfSelecionadoCobranca(ufSelecionada); // Atualiza o estado com a UF selecionada
    setFormData((prevState) => ({
      ...prevState,
      ufCobranca: ufSelecionada,
    }));
  }

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      const newState = {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      };

      if (name === 'enderecoCobrancaIgualEntrega' && checked) {
        newState.enderecoCobranca = prevState.enderecoEntrega;
        newState.numeroCobranca = prevState.numeroEntrega;
        newState.cepCobranca = prevState.cepEntrega;
        newState.cidadeCobranca = prevState.cidadeEntrega;
        newState.ufCobranca = prevState.ufEntrega;
      }

      return newState;
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Header tipoUsuario="cliente" tipoBotao="BotaoLogin" />
      <div className="cadastro_cliente">
        <h2>Faça o seu login!</h2>
        <form onSubmit={handleSubmit}>
          {/* Grupo: Informações Pessoais */}
          <fieldset>
            <legend>Informações Pessoais</legend>
            <div className="form-group">
              <input
                type="text"
                name="nomeCompleto"
                placeholder="Nome Completo"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="dataNascimento"
                placeholder="Data de nascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>

          {/* Grupo: Endereço de Entrega */}
          <fieldset>
            <legend>Endereço de Entrega</legend>
            <div className="form-group">
              <input
                type="text"
                name="enderecoEntrega"
                placeholder="Endereço"
                value={formData.enderecoEntrega}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="numeroEntrega"
                placeholder="Número"
                value={formData.numeroEntrega}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="cepEntrega"
                placeholder="CEP"
                value={formData.cepEntrega}
                onChange={handleChange}
                required
              />
              <select
                className='cadastro-select'
                name="ufEntrega"
                value={formData.ufEntrega}
                onChange={handleInputUfEntrega}
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
                className='cadastro-select'
                name="cidadeEntrega"
                value={formData.cidadeEntrega}
                onChange={handleChange}
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
          <fieldset>
            <legend>Endereço de Cobrança</legend>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="enderecoCobrancaIgualEntrega"
                  checked={formData.enderecoCobrancaIgualEntrega}
                  onChange={handleChange}
                />
                <span className="checkbox-custom"></span>Mesmo endereço de entrega
              </label>
              {!formData.enderecoCobrancaIgualEntrega && (
                <>
                  <input
                    type="text"
                    name="enderecoCobranca"
                    placeholder="Endereço"
                    value={formData.enderecoCobranca}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="numeroCobranca"
                    placeholder="Número"
                    value={formData.numeroCobranca}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="cepCobranca"
                    placeholder="CEP"
                    value={formData.cepCobranca}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className='cadastro-select'
                    name="ufCobranca"
                    value={formData.ufCobranca}
                    onChange={handleInputUfCobranca}
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
                    className='cadastro-select'
                    name="cidadeCobranca"
                    value={formData.cidadeCobranca}
                    onChange={handleChange}
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
          <fieldset>
            <legend>Login</legend>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmacaoSenha"
                placeholder="Confirmação da Senha"
                value={formData.confirmacaoSenha}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>

          <button className="buttom-form" type="submit">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastroCliente;