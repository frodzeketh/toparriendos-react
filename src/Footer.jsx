import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../src/img/logo.png";

const Footer = () => {
  // Función para generar la URL de arriendo para una localidad específica
  const getArriendoUrl = (localidad) => {
    return `/arriendo?localidad=${encodeURIComponent(localidad)}`;
  };

  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">
          <img className="logo-img" src={logo || "/placeholder.svg"} alt="Logo" />
        </h1>

        <h2 className="nav__title">Servicios</h2>
        <ul className="nav__ul">
          <li><Link to="/comprar">Comprar</Link></li>
          <li><Link to="/arriendo">Arriendo</Link></li>
          <li><Link to="/publica">Vender</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/informacion">Información</Link></li> {/* Nuevo enlace */}
          <li><Link to="/tyc">Términos y Condiciones</Link></li> {/* Nuevo enlace */}
        </ul>

        <address>
          <a className="footer__btn" href="mailto:toparriendoschile@gmail.com">Correo</a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Encuentra más propiedades</h2>
          <ul className="nav__ul">
            <li>
              <a href={getArriendoUrl("Santiago Centro, RM (Metropolitana)")} className="nav__link">
                Arriendo Santiago de Chile
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Maipú, RM (Metropolitana)")} className="nav__link">
                Arriendo Maipú
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Pudahuel, RM (Metropolitana)")} className="nav__link">
                Arriendo Pudahuel
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("La Reina, RM (Metropolitana)")} className="nav__link">
                Arriendo La Reina
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Huechuraba, RM (Metropolitana)")} className="nav__link">
                Arriendo Huechuraba
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Vitacura, RM (Metropolitana)")} className="nav__link">
                Arriendo Vitacura
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Propiedades en Arriendo</h2>
          <ul className="nav__ul">
            <li>
              <a href={getArriendoUrl("La Cisterna, RM (Metropolitana)")} className="nav__link">
                Arriendo La Cisterna
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Macul, RM (Metropolitana)")} className="nav__link">
                Arriendo Macul
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Ñuñoa, RM (Metropolitana)")} className="nav__link">
                Arriendo Ñuñoa
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Providencia, RM (Metropolitana)")} className="nav__link">
                Arriendo Providencia
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Las Condes, RM (Metropolitana)")} className="nav__link">
                Arriendo Las Condes
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("La Florida, RM (Metropolitana)")} className="nav__link">
                Arriendo La Florida
              </a>
            </li>
            <li>
              <a href={getArriendoUrl("Peñalolén, RM (Metropolitana)")} className="nav__link">
                Arriendo Peñalolén
              </a>
            </li>
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