import React, { useState } from 'react';
import '../styles/FiltrosCamisetas.css';

const FiltrosCamisetas = () => {
  const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
  const [faixasDePrecoSelecionadas, setFaixasDePrecoSelecionadas] = useState([]);
  const [estampasSelecionadas, setEstampasSelecionadas] = useState([]);
  const [colecoesSelecionadas, setColecoesSelecionadas] = useState([]);

  const tamanhos = ['XP','P', 'M', 'G', 'XG','XXG'];
  const faixasDePreco = [
    { label: '$10–$30', min: 10, max: 300 },
    { label: '$30–$50', min: 30, max: 50 },
    { label: '$50–$100', min: 50, max: 100 },
    { label: '$100–$150', min: 100, max: 150 },
    { label: '$150–$200', min: 150, max: 200 },
  ];
  const estampas = ['Brook Retroile Minimog', 'Abby Vagabond Learts'];
  const colecoes = ['Todos os produtos', 'Mais vendidos', 'Novidades'];

  const tratarMudancaTamanho = (tamanho) => {
    setTamanhosSelecionados((prev) =>
      prev.includes(tamanho) ? prev.filter((t) => t !== tamanho) : [...prev, tamanho]
    );
  };

  const tratarMudancaFaixaDePreco = (faixaLabel) => {
    setFaixasDePrecoSelecionadas((prev) =>
      prev.includes(faixaLabel) ? prev.filter((f) => f !== faixaLabel) : [...prev, faixaLabel]
    );
  };

  const tratarMudancaEstampa = (estampa) => {
    setEstampasSelecionadas((prev) =>
      prev.includes(estampa) ? prev.filter((e) => e !== estampa) : [...prev, estampa]
    );
  };

  const tratarMudancaColecao = (colecao) => {
    setColecoesSelecionadas((prev) =>
      prev.includes(colecao) ? prev.filter((c) => c !== colecao) : [...prev, colecao]
    );
  };

  const aplicarFiltros = () => {
    console.log('Tamanhos Selecionados:', tamanhosSelecionados);
    console.log('Faixas de Preço Selecionadas:', faixasDePrecoSelecionadas);
    console.log('Estampas Selecionadas:', estampasSelecionadas);
    console.log('Coleções Selecionadas:', colecoesSelecionadas);
  };

  return (
    <div className="filtros-container">
      <h2 className="filtros-titulo">Filtros</h2>
      <fieldset className="filtro-fieldset">
        <legend className="filtro-legend">Tamanho</legend>
        <div className="filtro-group">
          {tamanhos.map((tamanho) => (
            <label key={tamanho} className="filtro-label">
              <input
                type="checkbox"
                checked={tamanhosSelecionados.includes(tamanho)}
                onChange={() => tratarMudancaTamanho(tamanho)}
              />
              <span className="filtro-checkbox"></span>
              {tamanho}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filtro-fieldset">
        <legend className="filtro-legend">Faixa de Preço</legend>
        <div className="filtro-group">
          {faixasDePreco.map((faixa) => (
            <label key={faixa.label} className="filtro-label">
              <input
                type="checkbox"
                checked={faixasDePrecoSelecionadas.includes(faixa.label)}
                onChange={() => tratarMudancaFaixaDePreco(faixa.label)}
              />
              <span className="filtro-checkbox"></span>
              {faixa.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filtro-fieldset">
        <legend className="filtro-legend">Estampas</legend>
        <div className="filtro-group">
          {estampas.map((estampa) => (
            <label key={estampa} className="filtro-label">
              <input
                type="checkbox"
                checked={estampasSelecionadas.includes(estampa)}
                onChange={() => tratarMudancaEstampa(estampa)}
              />
              <span className="filtro-checkbox"></span>
              {estampa}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filtro-fieldset">
        <legend className="filtro-legend">Coleções</legend>
        <div className="filtro-group">
          {colecoes.map((colecao) => (
            <label key={colecao} className="filtro-label">
              <input
                type="checkbox"
                checked={colecoesSelecionadas.includes(colecao)}
                onChange={() => tratarMudancaColecao(colecao)}
              />
              <span className="filtro-checkbox"></span>
              {colecao}
            </label>
          ))}
        </div>
      </fieldset>

      <button onClick={aplicarFiltros} className="filtro-button">
        Aplicar Filtros
      </button>
    </div>
  );
};

export default FiltrosCamisetas;