import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../src/img/logo.png";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">
        <img className="logo-img" src={logo || "/placeholder.svg"} alt="Logo" />
        </h1>

        <h2 className="nav__title">Servicios</h2>
        <ul className="nav__ul">
          <li><a href="./pages/comprar.html">Comprar</a></li>
          <li><a href="./pages/alquileres.html">Alquilar</a></li>
          <li><a href="./pages/footer/vender.html">Vender</a></li>
          <li><a href="./pages/footer/emprender.html">Emprender</a></li>
          <li><a href="./pages/footer/informacion.html">Información</a></li>
          <li><a href="./pages/footer/terminosycondiciones.html">Términos y Condiciones</a></li>
        </ul>

        <address>
          <a className="footer__btn" href="mailto:toparriendoschile@gmail.com">Correo</a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Encuentra más propiedades</h2>
          <ul className="nav__ul">
            <li><a href="./arriendo/chillan.html">Departamentos Santiago de Chile</a></li>
          </ul>
        </li>
      </ul>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Propiedades en Alquiler</h2>
          <ul className="nav__ul">
            <li><a href="./arriendo/santiago-de-chile.html">Departamentos en arriendo Macul</a></li>
            <li><a href="./arriendo/valparaiso.html">Departamentos en arriendo La Cisterna</a></li>
          </ul>
        </li>
      </ul>

      <ul className="footer__nav">
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Redes Sociales</h2>
          <ul className="nav__ul nav__ul--extra">
          <li>
  <a href="https://www.instagram.com/toparriendoschile2.0/" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
</li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2024 | Copy</p>
      </div>
    </footer>
  );
};

export default Footer;