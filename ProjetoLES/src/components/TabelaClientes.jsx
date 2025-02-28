import React from 'react';
import { Link } from 'react-router-dom'; // Para redirecionar para a tela de edição
import imageExcluir from '../images/image9.png'; // Importe a imagem de exclusão
import imageEditar from '../images/image8.png'; // Importe a imagem de edição

const TabelaClientes = ({ clientes }) => {
  // Função para excluir um cliente
  const handleExcluirCliente = (index) => {
    console.log(`Excluir cliente com índice ${index}`);
    // Aqui você pode adicionar a lógica para excluir o cliente
  };

  return (
    <div className="tabela-container">
    <table className="tabela-clientes">
      <thead>
        <tr>
          <th>NOME COMPLETO</th>
          <th>DATA DE NASCIMENTO</th>
          <th>TELEFONE</th>
          <th>E-MAIL</th>
          <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente, index) => (
          <tr key={index}>
            <td>{cliente.nome}</td>
            <td>{cliente.dataNascimento}</td>
            <td>{cliente.telefone}</td>
            <td>{cliente.email}</td>
            <td>
              {/* Botão de editar */}
                <Link to={`/consultar-cliente/editar-cliente/${index}`} state={{ cliente }}>
                <img
                  src={imageEditar}
                  alt="Editar"
                  className="acao-imagem"
                />
              </Link>

              {/* Botão de excluir */}
              <img
                src={imageExcluir}
                alt="Excluir"
                className="acao-imagem"
                onClick={() => handleExcluirCliente(index)}
                style={{ cursor: 'pointer', marginLeft: '10px' }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TabelaClientes;