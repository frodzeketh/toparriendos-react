// src/components/CardAlquiler.jsx
import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "../global.css";

const CardAlquiler = ({ propiedad }) => {
  if (!propiedad) {
    return <div>Error: Propiedad no definida</div>;
  }

  // Verifica si hay imágenes en propiedad.imagenes
  const imagenes = propiedad.imagenes || [];

  return (
    <div className="card-alquiler-container">
      {/* Usa Link en lugar de <a> para la navegación */}
      <Link to={`/propiedad/${propiedad.id}`} className="a-none">
        <div className="card-alquiler">
          {/* Carrusel de imágenes */}
          <div id={`carouselExample${propiedad.id}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {imagenes.map((img, index) => (
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
            {/* Controles del carrusel */}
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

          {/* Contenido de la card */}
          <div className="card-alquiler-content">
            <h2 className="card-alquiler-header">{propiedad.price} CLP</h2>
            <p className="card-alquiler-location">
              + Gastos comunes aproximados ${propiedad.gastosComunes || "N/A"}
            </p>
            <p className="card-alquiler-expenses">{propiedad.direccion}</p>
            <div className="card-alquiler-info">
              <div className="card-alquiler-icons">
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* Icono de área */}
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.metrosTotales} m²</span> totales
                  </span>
                </div>
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/* Icono de metros cubiertos */}
                    <path d="M368 80l32 0 0 32-32 0 0-32zM352 32c-17.7 0-32 14.3-32 32L128 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-192c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM96 160c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l-192 0c0-17.7-14.3-32-32-32l0-192zM48 400l32 0 0 32-32 0 0-32zm320 32l0-32 32 0 0 32-32 0zM48 112l0-32 32 0 0 32-32 0z"/>
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.metrosCubiertos} m²</span> cubiertos
                  </span>
                </div>
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* Icono de ambientes */}
                    <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5L64 448l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 192 0 32 0 0-32 0-448zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64l-96 0 0 64z"/>
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.ambientes}</span> ambientes
                  </span>
                </div>
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* Icono de baños */}
                    <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3zM32 352l0 16c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-16L32 352z"/>
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.baños}</span> baños
                  </span>
                </div>
              </div>
            </div>
            <div className="card-alquiler-description">{propiedad.descripcion}</div>
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

            {/* Botones de contacto */}
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
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
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
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Link> {/* Cierra el componente Link aquí */}
    </div>
  );
};

export default CardAlquiler;