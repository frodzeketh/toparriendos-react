// src/components/SearchInput.jsx
import React, { useState } from "react";
import { localidades } from "../data/localidades"; // Ruta correcta para localidades

const SearchInput = ({ onSearch, selectedOption, onOptionSelect, isMobile }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la búsqueda
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm); // Pasa el término de búsqueda al handler en Home.jsx
    }
  };

  return (
    <div className="search-section">
      {/* Botones de opción (Arrendar, Comprar, Vender) */}
      <div className="option-buttons">
        {isMobile ? (
          <>
            <button
              className={`option-button ${selectedOption === "arrendar" ? "active" : ""}`}
              onClick={() => onOptionSelect("arrendar")}
            >
              Arrendar
            </button>
            <button
              className={`option-button ${selectedOption === "comprar" ? "active" : ""}`}
              onClick={() => onOptionSelect("comprar")}
            >
              Comprar
            </button>
            <button
              className={`option-button ${selectedOption === "vender" ? "active" : ""}`}
              onClick={() => onOptionSelect("vender")}
            >
              Vender
            </button>
          </>
        ) : (
          <>
            <button
              className={`option-button ${selectedOption === "arrendar" ? "active" : ""}`}
              onClick={() => onOptionSelect("arrendar")}
            >
              Quiero arrendar
            </button>
            <button
              className={`option-button ${selectedOption === "comprar" ? "active" : ""}`}
              onClick={() => onOptionSelect("comprar")}
            >
              Quiero comprar
            </button>
            <button
              className={`option-button ${selectedOption === "vender" ? "active" : ""}`}
              onClick={() => onOptionSelect("vender")}
            >
              Quiero vender
            </button>
          </>
        )}
      </div>

      <div className="search-input-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="¿Dónde querés mudarte?"
          list="localidades-list"
        />
        <datalist id="localidades-list">
          {localidades.map((localidad, index) => (
            <option key={index} value={localidad} />
          ))}
        </datalist>
        <button className="search-button" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchInput;