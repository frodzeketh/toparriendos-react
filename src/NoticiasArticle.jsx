import React from 'react';
import noticiaunohome from './img/noticia-1-home.jpg'

const NoticiasArticle = () => {
  return (
    <div className="noticias-toparriendos">
      <header className="noticias-header">
        <h1 className="noticias-title">Noticias</h1>
      </header>

      <article className="noticias-article">
        <div className="noticias-image">
        <img src={noticiaunohome} alt="Certificación de Vivienda Sustentable" />
        </div>
        <div className="noticias-content">
          <h2 className="noticias-article-title">
            Los cambios que traerá la nueva Certificación de Vivienda Sustentable
          </h2>
          <time className="noticias-date">Enero 29, 2025</time>
          <a href="#" className="noticias-category">Propiedades</a>
          <p className="noticias-description">
            A cinco años del lanzamiento del programa de Certificación de Vivienda Sustentable (CVS), el Ministerio de
            Vivienda y Urbanismo está preparando la entrada en operación de una nueva versión del instrumento. Esto, con
            el fin de incorporar cambios en materia de administración, en su estructura y en los requisitos de validación.
          </p>
          <a href="#" className="noticias-read-more">Leer más</a>
        </div>
      </article>
    </div>
  );
};

export default NoticiasArticle;
