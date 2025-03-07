import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Asegúrate de que esta ruta esté correcta
import { collection, getDocs } from "firebase/firestore";

const CarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]); // Estado para almacenar las propiedades

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Obtener todos los documentos de la colección "052431"
        const querySnapshot = await getDocs(collection(db, "052431"));

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs.map((doc) => doc.data());
          console.log("✅ Datos completos obtenidos de Firebase:", data);

          // Guardamos todos los documentos en el estado
          setProperties(data);
        } else {
          console.warn("⚠️ No se encontraron documentos.");
        }
      } catch (error) {
        console.error("❌ Error al obtener propiedades:", error);
      }
    };

    fetchProperties();
  }, []); // Solo se ejecuta cuando el componente se monta

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + properties.length) % properties.length
    );
  };

  return (
    <div className="container-home">
      <h1 className="section-title">Encuentra casas y departamentos en arriendo y venta</h1>
      <div className="tabs">
        <button className="tab active">Arriendos</button>
      </div>

      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Corregir interpolación de la cadena
            transition: "transform 0.5s ease-in-out", // Añadir transición para un deslizamiento suave
          }}
        >
          {properties.length === 0 ? (
            <p>Cargando propiedades...</p> // Mensaje en caso de que no haya propiedades cargadas
          ) : (
            properties.map((property, index) => (
              <a
                href={`./pages/propiedades/propiedad${property.id}.html`} // Enlazamos al documento por ID, corregido
                className="property-card"
                key={index}
              >
                <div className="property-image">
                  <img
                    src={property.img}
                    alt={`Propiedad en ${property.location}`} // Corregir alt text
                    className="property-img"
                  />
                </div>
                <div className="property-content">
                  <div className="property-type">{property.type}</div>
                  <div className="property-price">{property.price}</div>
                  <div className="property-location">{property.location}</div>
                  <div className="property-status">
                    <span>{property.status}</span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Botón de la izquierda (prev) */}
        <button
          type="button"
          className="carousel-button prev"
          onClick={prevSlide}
          disabled={currentIndex === 0} // Deshabilita el botón si estamos en el primer índice
        >
          <i className="fas fa-arrow-left icon-carrousel"></i>
        </button>

        {/* Botón de la derecha (next) */}
        <button
          className="carousel-button next"
          onClick={nextSlide}
          disabled={currentIndex === properties.length - 1} // Deshabilita el botón si estamos en el último índice
        >
          <i className="fas fa-arrow-right icon-carrousel"></i>
        </button>
      </div>
    </div>
  );
};

export default CarouselHome;
