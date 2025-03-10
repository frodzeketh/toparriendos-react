import { Link, useLocation } from "react-router-dom";
import logo from "../src/img/logo.png";
import logoOffCanvas from "../src/img/logo-off-canvas.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./global.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="logo-img" src={logo || "/placeholder.svg"} alt="Logo" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}>Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/arriendo" className={`navbar-link ${location.pathname === "/arriendo" ? "active" : ""}`}>Arriendo</Link>
          </li>
          <li className="navbar-item">
            <Link to="/comprar" className={`navbar-link ${location.pathname === "/comprar" ? "active" : ""}`}>Comprar</Link>
          </li>
          <li className="navbar-item">
            <Link to="/publica" className={`navbar-link ${location.pathname === "/publica" ? "active" : ""}`}>Arrendar</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className={`navbar-link ${location.pathname === "/blog" ? "active" : ""}`}>Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className={`navbar-link ${location.pathname === "/contacto" ? "active" : ""}`}>Contacto</Link>
          </li>
        </ul>
        <button className="btn login-btn desktop-only" type="button">Iniciar sesión</button>
        <div className="mobile-menu">
          <button className="btn menu-toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#leftOffcanvas" aria-controls="leftOffcanvas">
            <i className="bi bi-list icon"></i>
          </button>
          <Link to="/" className="navbar-logo-mobile">
            <img className="logo-img" src={logo || "/placeholder.svg"} alt="Logo" />
          </Link>
          <button className="btn menu-toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#rightOffcanvas" aria-controls="rightOffcanvas">
            <i className="bi bi-person icon"></i>
          </button>
        </div>
      </nav>

      {/* Left Offcanvas Menu */}
      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="leftOffcanvas" aria-labelledby="leftOffcanvasLabel">
        <div className="offcanvas-header">
          <h1 className="offcanvas-logo">
            <img src={logoOffCanvas || "/placeholder.svg"} alt="Logo" className="offcanvas-logo-img" />
          </h1>
          <button type="button" className="btn-close close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body offcanvas-links">
          <Link to="/" className={`offcanvas-link ${location.pathname === "/" ? "active" : ""}`}>Inicio</Link>
          <Link to="/arriendo" className={`offcanvas-link ${location.pathname === "/arriendo" ? "active" : ""}`}>Arriendo</Link>
          <Link to="/comprar" className={`offcanvas-link ${location.pathname === "/comprar" ? "active" : ""}`}>Comprar</Link>
          <Link to="/publica" className={`offcanvas-link ${location.pathname === "/publica" ? "active" : ""}`}>Arrendar</Link>
          <Link to="/blog" className={`offcanvas-link ${location.pathname === "/blog" ? "active" : ""}`}>Blog</Link>
          <Link to="/contacto" className={`offcanvas-link ${location.pathname === "/contacto" ? "active" : ""}`}>Contacto</Link>
        </div>
      </div>

      {/* Right Offcanvas Menu */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="rightOffcanvas" aria-labelledby="rightOffcanvasLabel">
        <div className="offcanvas-header">
          <h1 className="offcanvas-logo">
            <img src={logoOffCanvas || "/placeholder.svg"} alt="Logo" className="offcanvas-logo-img" />
          </h1>
          <button type="button" className="btn-close close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-content">
            <p>Creá tu cuenta y accedé a tus favoritos</p>
            <div className="d-grid gap-2">
              <button className="btn login-btn" type="button">Iniciar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
