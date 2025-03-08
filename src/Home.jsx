// src/Home.jsx
import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import { localidades } from "./data/localidades";
import CarouselHome from "./CarrouselHome";
import ImagenesLocalidades from "./ImagenesLocalidades";
import NoticiasArticle from './NoticiasArticle';
import PublicaHome from './PublicaHome';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("arrendar");
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si la pantalla es móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Maneja la selección de opción (arrendar, comprar, vender)
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Maneja la búsqueda y redirección
  const handleSearchSubmit = (location) => {
    if (selectedOption === "vender") {
      // Redirige a la página de contacto si se selecciona "vender"
      window.location.href = `/contacto?localidad=${encodeURIComponent(location)}`;
    } else {
      // Redirige a la página de arriendo o compra según la opción seleccionada
      const page = selectedOption === "arrendar" ? "arriendo" : "comprar";
      window.location.href = `/${page}?localidad=${encodeURIComponent(location)}`;
    }
  };

  return (
    <div className="home-container">
      <main className="home-main">
        {/* Sección del buscador */}
        <div className="hero-section">
          <h1 className="hero-title">Mucho más que mudarte</h1>
          <SearchInput
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
            onSearch={handleSearchSubmit}
            isMobile={isMobile}
          />
        </div>

        {/* Carrusel y otras secciones */}
        <CarouselHome />
      </main>

      {/* Otras secciones de la página de inicio */}
      <ImagenesLocalidades />
      <NoticiasArticle />
      <PublicaHome />
    </div>
  );
};

export default Home;