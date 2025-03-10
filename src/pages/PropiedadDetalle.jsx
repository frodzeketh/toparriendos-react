// PropiedadDetalle.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dbPropiedades } from "../firebase"; // Asegúrate de importar dbPropiedades
import "../global.css";

const PropiedadDetalle = () => {
  const { id } = useParams();
  const [propiedad, setPropiedad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img.src);
    const modal = document.getElementById("imageModal");
    if (modal && typeof window !== "undefined" && window.bootstrap) {
      const bootstrapModal = new window.bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  };

  useEffect(() => {
    const fetchPropiedad = async () => {
      try {
        const propiedadRef = doc(dbPropiedades, "propiedades", "cards-propiedades");
        const propiedadDoc = await getDoc(propiedadRef);

        if (propiedadDoc.exists()) {
          const propiedades = propiedadDoc.data();
          if (propiedades.id === id) {
            setPropiedad(propiedades);
          } else {
            console.log("No se encontró la propiedad con el ID:", id);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching propiedad:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropiedad();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!propiedad) {
    return <div>Propiedad no encontrada</div>;
  }

  return (
    <>
      {/* Modal para mostrar imagen ampliada */}
      <div className="modal fade" id="imageModal" tabIndex={-1} aria-labelledby="imageModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">
                Imagen ampliada
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img
                id="modalImage"
                src={selectedImage || "/placeholder.svg"}
                className="img-fluid"
                alt="Imagen ampliada"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carrusel */}
      <div id="carouselExampleIndicators" className="carousel slide mx-auto p-3" style={{ maxWidth: "600px" }}>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {propiedad.imagenes.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={img}
                className="d-block w-100 img-thumbnail"
                alt={`Imagen ${index + 1}`}
                onClick={(e) => openModal(e.target)}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-maps mx-auto p-4">
        <div className="grid-lg-cols-[2fr,1fr] gap-6">
          {/* Columna Izquierda */}
          <div className="card-descripcion">
            <div className="header-descripcion">
              <h2 className="card-alquiler-header">{propiedad.price || "520.000"} CLP</h2>
              <p className="card-alquiler-expenses">
                {propiedad.direccion || "Av. Libertador Bernardo O'Higgins 1000, Santiago Centro"}
              </p>
              <p className="card-alquiler-location">+ {propiedad.gastosComunes || "70.000"} Expensas</p>
              <div className="card-alquiler-icons">
                {/* Íconos */}
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.metrosTotales || "115"} m²</span> totales
                  </span>
                </div>
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M368 80l32 0 0 32-32 0 0-32zM352 32c-17.7 0-32 14.3-32 32L128 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-192c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM96 160c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l-192 0c0-17.7-14.3-32-32-32l0-192zM48 400l32 0 0 32-32 0 0-32zm320 32l0-32 32 0 0 32-32 0zM48 112l0-32 32 0 0 32-32 0z" />
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.metrosCubiertos || "60"} m²</span> cubiertos
                  </span>
                </div>
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5L64 448l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 192 0 32 0 0-32 0-448zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128l96 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64l-96 0 0 64z" />
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.ambientes || "155"} m²</span> totales
                  </span>
                </div>
                <div>
                  <svg className="icono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3zM32 352l0 16c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-16L32 352z" />
                  </svg>
                  <span>
                    <span className="negrita">{propiedad.baños || "1"}</span> baño
                  </span>
                </div>
              </div>
            </div>
            <div className="contenido-descripcion space-y-4">
              <div className="card-alquiler-description">
                {propiedad.descripcion || "DEPARTAMENTO EN ALQUILER, 1 DORMITORIO Y BALCÓN."}
              </div>
            </div>
          </div>

          {/* Descripción Detallada */}
          <div className="card-descripcion">
            <div className="header-descripcion">
              <h2 className="card-alquiler-header">Descripción</h2>
            </div>
            <div className="contenido-descripcion space-y-4">
              {propiedad.descripcionDetallada ? (
                <div className="card-alquiler-description">{propiedad.descripcionDetallada}</div>
              ) : (
                <>
                  <div className="card-alquiler-description">
                    Cocina separada: Equipamiento completo con cocina eléctrica, hornito y heladera pequeña.
                  </div>
                  <div className="card-alquiler-description">
                    Baño amplio: Con ducha y gran mesada, ventilación al pulmón.
                  </div>
                  <div className="card-alquiler-description">Amplio placard: Ideal para almacenamiento.</div>
                  <div className="card-alquiler-description">
                    Living cómodo: Equipado con un sillón de 3 cuerpos y mesa con seis sillas, perfecto para recibir
                    visitas.
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Ubicación con el Iframe del Mapa */}
          <div className="card-ubicacion">
            <div className="header-ubicacion">
              <h2 className="card-alquiler-header">Ubicación</h2>
            </div>
            <div className="contenido-ubicacion p-4">
              <iframe
                src={propiedad.mapaUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.123456!2d-70.64827!3d-33.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf1a29b12345%3A0x87654321abcd!2sAv.%20Libertador%20Bernardo%20O'Higgins%201000!5e0!3m2!1ses!2scl!4v1696781234567"}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contacto */}
          <div className="card-ubicacion">
            <div className="header-ubicacion">
              <h2 className="card-alquiler-header">Contacto</h2>
            </div>
            <div className="contenido-ubicacion p-4">
              <div className="card-alquiler-footer">
                <div className="card-alquiler-agent-info">
                  <img
                    src={propiedad.agenteImagen || "../img/casa1.jpeg"}
                    alt="Agente"
                    className="card-alquiler-agent-img"
                  />
                  <div>
                    <div className="name-agent">{propiedad.agenteNombre || "Maria Eugenia"}</div>
                    <div style={{ fontSize: "12px", color: "#888" }}>{propiedad.agenteEmpresa || "Top Arriendos"}</div>
                  </div>
                </div>

                <div className="card-alquiler-contact-buttons">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${propiedad.agenteWhatsapp || "56972147166"}?text=Hola%20Top%20Arriendos,%20estoy%20interesado%20en%20esta%20propiedad%20en%20arriendo.%20%C2%BFSigue%20disponible?`}
                    className="card-alquiler-wsp"
                  >
                    <i className="bx bxl-whatsapp icono-wsp"></i>
                    <span className="text-botton-wsp">WhatsApp</span>
                  </a>

                  {/* Teléfono */}
                  <a href={`tel:+${propiedad.agenteTelefono || "56972147166"}`} className="card-alquiler-phone">
                    <svg className="icono-cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </a>

                  {/* Correo */}
                  <a
                    href={`mailto:${propiedad.agenteEmail || "toparriendoschile@gmail.com"}`}
                    className="card-alquiler-email"
                  >
                    <svg className="icono-cards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropiedadDetalle;