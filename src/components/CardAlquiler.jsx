// src/components/CardAlquiler.jsx
import React from "react";
import "../global.css"; // Asegúrate de importar los estilos



const CardAlquiler = ({ propiedad }) => {
  return (
    <div className="card-alquiler-container">
      <a className="a-none" href={`/propiedad/${propiedad.id}`}>
        <div className="card-alquiler">
          <div id={`carouselExample${propiedad.id}`} className="carousel slide">
            <div className="carousel-inner">
              {propiedad.imagenes.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={img}
                    className="d-block w-100 card-alquiler-img"
                    alt={`Propiedad ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExample${propiedad.id}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExample${propiedad.id}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-alquiler-content">
            <h2 className="card-alquiler-header">{propiedad.precio} CLP</h2>
            <p className="card-alquiler-location">
              + Gastos comunes aproximados $ {propiedad.gastosComunes}
            </p>
            <p className="card-alquiler-expenses">{propiedad.direccion}</p>
            <div className="card-alquiler-info">
              <div className="card-alquiler-icons">
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* Icono de área */}
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.metrosTotales} m²</span> totales
                  </span>
                </div>
                {/* Otros íconos y detalles */}
              </div>
            </div>
            <div className="card-alquiler-description">{propiedad.descripcion}</div>
          </div>
          <div className="card-alquiler-footer">
            <div className="card-alquiler-agent-info">
              <img
                src={propiedad.agenteImagen}
                alt="Agente"
                className="card-alquiler-agent-img"
              />
              <div>
                <div className="name-agent">{propiedad.agenteNombre}</div>
                <div style={{ fontSize: "12px", color: "#888" }}>
                  {propiedad.agenteEmpresa}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="card-alquiler-contact-buttons">
        <a
          href={`https://wa.me/${propiedad.agenteWhatsapp}?text=Hola, estoy interesado en esta propiedad.`}
          className="card-alquiler-wsp"
        >
          <i className="bx bxl-whatsapp icono-wsp"></i>
          <span className="text-botton-wsp">WhatsApp</span>
        </a>
        <a href={`tel:${propiedad.agenteTelefono}`} className="card-alquiler-phone">
          <svg
            className="icono-cards"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* Icono de teléfono */}
          </svg>
        </a>
        <a
          href={`mailto:${propiedad.agenteEmail}`}
          className="card-alquiler-email"
        >
          <svg
            className="icono-cards"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* Icono de correo */}
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardAlquiler;