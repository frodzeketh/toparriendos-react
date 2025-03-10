// src/components/CarouselHome.js
import React, { useState, useEffect } from "react";
import { dbPropiedades } from "./firebase"; // Importa dbPropiedades
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom"; // Importa Link para la navegación

const CarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]); // Estado para almacenar las propiedades

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Obtener solo propiedades de tipo "arriendo"
        const propiedadesRef = collection(dbPropiedades, "propiedades");
        const q = query(propiedadesRef, where("tipo", "==", "arriendo")); // Filtra por tipo "arriendo"
        const querySnapshot = await getDocs(q);

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
      <h1 className="section-title">Encuentra casas y departamentos en arriendo</h1>
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
              <Link
                to={`/propiedad/${property.id}`} // Usa el id para redirigir a la página de detalles
                className="property-card"
                key={index}
              >
                <div className="property-image">
                  <img
                    src={property.imagenes[0]} // Usa la primera imagen del array de imágenes
                    alt={`Propiedad en ${property.ubicacion}`} // Corregir alt text
                    className="property-img"
                  />
                </div>
                <div className="property-content">
                  <div className="property-type">
                    {property.estiloInm} {/* Muestra "Departamento" o "Casa" */}
                  </div>
                  <div className="property-price">{property.price}</div>
                  <div className="property-description">
                    {property.descripcionCarrousel} {/* Muestra la descripción del carrusel */}
                  </div>
                  <div className="property-location">
                    {property.direccion}, {property.ubicacion} {/* Muestra dirección y localidad */}
                  </div>
                </div>
              </Link>
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