import React from 'react';
import '../global.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="featured-articles">
        <article className="featured-article">
          <div className="article-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Casa con documentos" />
          </div>
          <div className="article-content">
            <span className="article-category">Cédulas</span>
            <h2 className="article-title">Cédula Catastral: qué es, cómo se obtiene y cuál es su importancia</h2>
            <p className="article-excerpt">Conoce qué es la Cédula Catastral y su importancia para el control inmobiliario.</p>
            <span className="article-author">Por Admin</span>
          </div>
        </article>
        
        <article className="featured-article">
          <div className="article-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Decoración Feng Shui" />
          </div>
          <div className="article-content">
            <span className="article-category">Decoración</span>
            <h2 className="article-title">Feng Shui: decoración enfocada en la armonía y el bienestar</h2>
            <p className="article-excerpt">Descubre los secretos del Feng Shui para atraer energía positiva...</p>
            <span className="article-author">Por Admin</span>
          </div>
        </article>
      </div>

      <div className="article-grid">
        <article className="article-card">
          <div className="card-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Vista de ciudad" />
          </div>
          <div className="card-content">
            <span className="card-category">Arquitectura</span>
            <h3 className="card-title">Qué representa la historia de las ciudades del país a lo largo del año</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Mercado inmobiliario" />
          </div>
          <div className="card-content">
            <span className="card-category">Mercado Inmobiliario</span>
            <h3 className="card-title">Mercado barrial de Buenos Aires: valor cultural para esta región</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Paisaje natural" />
          </div>
          <div className="card-content">
            <span className="card-category">Turismo</span>
            <h3 className="card-title">Parque Nacional Iguazú: patrimonio natural argentino</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Familia" />
          </div>
          <div className="card-content">
            <span className="card-category">Vivienda</span>
            <h3 className="card-title">Vivienda familiar: calidad de vida para todos</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Edificio" />
          </div>
          <div className="card-content">
            <span className="card-category">Mercado Inmobiliario</span>
            <h3 className="card-title">Comprar un piso: detalles, oportunidades y puntos a tener en cuenta</h3>
          </div>
        </article>

        <article className="article-card">
          <div className="card-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog-BVrIO0PNT76zd7wYfMfopSsYBMrGJW.png" alt="Propiedad" />
          </div>
          <div className="card-content">
            <span className="card-category">Actualidad</span>
            <h3 className="card-title">Cómo calcular el valor de una propiedad en Argentina</h3>
          </div>
        </article>
      </div>

      <div className="featured-bottom">
        <div className="bottom-content">
          <span className="bottom-category">Actualidad</span>
          <h2 className="bottom-title">¿Para qué se utiliza el mes de depósito en un alquiler?</h2>
          <p className="bottom-excerpt">Conoce este elemento contractual para qué sirve el mes de depósito en un alquiler y para qué se utiliza.</p>
          <button className="bottom-button">Saber más</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
