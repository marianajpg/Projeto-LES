import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import FiltroCamisetas from '../components/FiltrosCamisetas.jsx';
import ProdutoCard from '../components/ProdutoCard.jsx';
import '../styles/ShopCamisetas.css';

const ShopCamisetas = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '' },
  ];

  return (
    <div>
      <Header tipoUsuario="cliente" tipoBotao="BotaoLogin" />
      <Breadcrumb items={breadcrumbItems} />
      <h1 className='shop-titulo'>SHOP CAMISETAS</h1>
      <div className="main-container">
        <FiltroCamisetas />
        <div className="cards-container">
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
          <ProdutoCard
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOL-S20dkG9y1lwYf2WEEqxgIDB0ThP6tg&s'} 
            nome={'Shiny Dress'}
            preco={'R$95.50'}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCamisetas;