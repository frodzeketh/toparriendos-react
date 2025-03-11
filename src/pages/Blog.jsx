import React from 'react';
import '../global.css';
import noticiauno from '../img/noticia1.jpg';
import noticiados from '../img/noticia2.jpg';
import noticiatres from '../img/noticia3.jpg';
import noticiacuatro from '../img/noticia4.png';
import noticiacinco from '../img/noticia5.jpg';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="featured-articles">
        <article className="featured-article">
          <div className="article-image">
          <img src={noticiauno} alt="Aumento del 24% en ventas de viviendas nuevas en la RM impulsa el mercado inmobiliario como opción de inversión" />
          </div>
          <div className="article-content">
            <span className="article-category">Propiedades</span>
            <h2 className="article-title">Aumento del 24% en ventas de viviendas nuevas en la RM impulsa el mercado inmobiliario como opción de inversión</h2>
            <p className="article-excerpt">Ventas de viviendas nuevas en la RM crecen un 24% en 2024</p>
            <span className="article-author">Marzo 2025</span>
          </div>
        </article>
        
        <article className="featured-article">
          <div className="article-image">
          <img src={noticiados} alt="Disfruta del verano en tu Departamento" />
          </div>
          <div className="article-content">
            <span className="article-category">Tendencia</span>
            <h2 className="article-title">Disfruta del verano en tu Departamento</h2>
            <p className="article-excerpt">Cómo disfrutar del verano en tu departamento optimizando el espacio</p>
            <span className="article-author">Enero 2025</span>
          </div>
        </article>
      </div>

      <div className="article-grid">
        <article className="article-card">
          <div className="card-image">
          <img src={noticiatres} alt="Parque Bicentenario de Cerrillos, un factor de plusvalía para la comuna" />
          </div>
          <div className="card-content">
            <span className="card-category">Tendencia</span>
            <h3 className="card-title">Parque Bicentenario de Cerrillos, un factor de plusvalía para la comuna</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
          <img src={noticiacuatro} alt="El mejor momento para créditos hipotecarios" />
          </div>
          <div className="card-content">
            <span className="card-category">Mercado Inmobiliario</span>
            <h3 className="card-title">El mejor momento para créditos hipotecarios</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
          <img src={noticiacinco} alt="El mejor momento para créditos hipotecarios" />
          </div>
          <div className="card-content">
            <span className="card-category">Invertir en departamentos: una estrategia rentable y segura</span>
            <h3 className="card-title">Invertir en departamentos: una estrategia rentable y segura</h3>
          </div>
        </article>

              

      <div className="featured-bottom">
        <div className="bottom-content">
          <span className="bottom-category">Mercado inmobiliario</span>
          <h2 className="bottom-title">
            Conoce reglas inmobiliarias
          </h2>
          <p className="bottom-excerpt">Conoce este elemento contractual para qué sirve en un arriendo y para qué se utiliza.</p>
          <button className="bottom-button">Saber más</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
