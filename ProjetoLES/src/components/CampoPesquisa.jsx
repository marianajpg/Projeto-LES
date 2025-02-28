import React from 'react';
import lupa from '../images/image10.png'; // Importe a imagem da lupa

const CampoPesquisa = ({ termoPesquisa, setTermoPesquisa }) => {
  return (
    <div className="campo-pesquisa">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
      />
      <button className="botao-lupa">
        <img src={lupa} alt="Pesquisar" className="lupa" />
      </button>
    </div>
  );
};

export default CampoPesquisa;