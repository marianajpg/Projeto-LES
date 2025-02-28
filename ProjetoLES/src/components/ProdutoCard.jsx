const ProdudoCard = ({ imageUrl, nome, preco }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={nome}  className="card-image" />
      <h3 className="card-nome">{nome}</h3>
      <p className="card-preco">{preco}</p>
    </div>
  );
};


export default ProdudoCard;