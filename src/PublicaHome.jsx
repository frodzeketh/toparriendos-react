import React from 'react';
import { Link } from "react-router-dom";
import logo from "../src/img/logo.png";

const PublicaHome = () => {
  return (
    <section className="main-publica">
      <div className="publica-left">
        
        <h2 className="publica-title">¡Publica con nosotros!</h2>
      </div>

      <div className="publica-center">
        <p className="publica-question">
          ¿Eres <span>inmobiliaria o corredor</span>?
        </p>
        <p className="publica-description">
          Conoce los planes y productos especializados que hemos desarrollado para potenciar tu negocio
        </p>
      </div>

      <Link to="/publica" className="publica-button">
  Publica tu propiedad
</Link>

    </section>
  );
};

export default PublicaHome;
