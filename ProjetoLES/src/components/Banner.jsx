import React from 'react';
import '../styles/Home.css'; 
import modelo from '../images/image_banner.png'; // Importe a imagem da modelo
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">EXPLORE CAMISETAS UNICAS!!</h1>
        <h2 className="banner-subtitle">Viva pela moda estraordinária e inovadora!</h2>
        <button className="banner-button"><Link className='banner-button-legend ' to="/camisetas">COMPRE AGORA</Link></button>
      </div>
      <img src={modelo} alt="Modelo" className="banner-image" />
    </div>
  );
};

export default Banner;