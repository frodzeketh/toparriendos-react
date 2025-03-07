import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import { localidades } from "./data/localidades";
import CarouselHome from "./CarrouselHome";
import ImagenesLocalidades from "./ImagenesLocalidades";
import NoticiasArticle from './NoticiasArticle';
import PublicaHome from './PublicaHome';
import CardAlquiler from "./components/CardAlquiler";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("arrendar");
  const [isMobile, setIsMobile] = useState(false);

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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearchSubmit = (location) => {
    if (selectedOption === "vender") {
      window.location.href = `/contacto?localidad=${encodeURIComponent(location)}`;
    } else {
      const page = selectedOption === "arrendar" ? "arriendo" : "comprar";
      window.location.href = `/${page}?localidad=${encodeURIComponent(location)}`;
    }
  };

  // Lista de propiedades de ejemplo
  const propiedades = [
    { id: 1, titulo: "Departamento en Las Condes", precio: "$800.000", imagen: "url1.jpg" },
    { id: 2, titulo: "Casa en Ñuñoa", precio: "$1.200.000", imagen: "url2.jpg" },
    { id: 3, titulo: "Loft en Providencia", precio: "$950.000", imagen: "url3.jpg" }
  ];

  return (
    <div className="home-container">
      <main className="home-main">
        <div className="hero-section">
          <h1 className="hero-title">Mucho más que mudarte</h1>
          <SearchInput
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
            onSearch={handleSearchSubmit}
            isMobile={isMobile}
          />
        </div>
        <CarouselHome />
      </main>
      <ImagenesLocalidades />
      <NoticiasArticle />
      <PublicaHome />
      
      
    </div>
  );
};

export default Home;
