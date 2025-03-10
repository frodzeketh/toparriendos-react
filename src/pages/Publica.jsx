import React from 'react';
import '../global.css';

const Publicar = () => {
  return (
    <div className="arrendar-container">
      <div className="arrendar-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
      
      <div className="arrendar-content">
        <h1 className="arrendar-titulo">
          ¿Con qué perfil <span className="texto-naranja">te identificás?</span>
        </h1>
        <p className="arrendar-subtitulo">
          Seleccioná el que se ajusta a tus intereses.
        </p>
        
        <div className="cards-arrendar-container">
          <div className="card-arrendar">
            <div className="card-arrendar-borde"></div>
            <div className="card-arrendar-contenido">
              <div className="card-arrendar-icono">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-3.5 0-7 1.75-7 5.25V20h14v-.75c0-3.5-3.5-5.25-7-5.25z" />
                  <path d="M19 10h2v5h-2zM3 10h2v5H3zM17 15l2 5H5l2-5" />
                </svg>
              </div>
              <h2 className="card-arrendar-titulo">Particular</h2>
              <h3 className="card-arrendar-subtitulo">Dueño Directo</h3>
            </div>
          </div>
          
          <div className="card-arrendar">
            <div className="card-arrendar-borde"></div>
            <div className="card-arrendar-contenido">
              <div className="card-arrendar-icono">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
                </svg>
              </div>
              <h2 className="card-arrendar-titulo">Inmobiliaria</h2>
              <h3 className="card-arrendar-subtitulo">Corredor</h3>
            </div>
          </div>
          
          <div className="card-arrendar">
            <div className="card-arrendar-borde"></div>
            <div className="card-arrendar-contenido">
              <div className="card-arrendar-icono">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22h20M17 22V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v17M12 7v.01M12 11v.01M12 15v.01M7 22v-4h10v4" />
                  <path d="M5 8h4M15 8h4M5 12h4M15 12h4M5 16h4M15 16h4" />
                </svg>
              </div>
              <h2 className="card-arrendar-titulo">Constructora</h2>
              <h3 className="card-arrendar-subtitulo">Desarrolladora</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicar;
