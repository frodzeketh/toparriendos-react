import React, { useState, useRef, useEffect } from "react";
import { localidades } from "../data/localidades";

const SearchInput = ({ onSearch, selectedOption, onOptionSelect, isMobile }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocalidades, setFilteredLocalidades] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Manejar cambios en el input
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredLocalidades([]);
      setShowDropdown(false);
    } else {
      const filtered = localidades.filter((localidad) =>
        localidad.toLowerCase().includes(term.toLowerCase())
      ).slice(0, 5); // Limita a 5 opciones
      setFilteredLocalidades(filtered);
      setShowDropdown(filtered.length > 0);
    }
  };

  // Seleccionar una localidad
  const handleSelectLocalidad = (localidad) => {
    setSearchTerm(localidad);
    setShowDropdown(false);
    inputRef.current.blur();
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-section">
      <div className="option-buttons">
        {isMobile ? (
          <>
            <button className={`option-button ${selectedOption === "arrendar" ? "active" : ""}`} onClick={() => onOptionSelect("arrendar")}>
              Arrendar
            </button>
            <button className={`option-button ${selectedOption === "comprar" ? "active" : ""}`} onClick={() => onOptionSelect("comprar")}>
              Comprar
            </button>
            <button className={`option-button ${selectedOption === "vender" ? "active" : ""}`} onClick={() => onOptionSelect("vender")}>
              Vender
            </button>
          </>
        ) : (
          <>
            <button className={`option-button ${selectedOption === "arrendar" ? "active" : ""}`} onClick={() => onOptionSelect("arrendar")}>
              Quiero arrendar
            </button>
            <button className={`option-button ${selectedOption === "comprar" ? "active" : ""}`} onClick={() => onOptionSelect("comprar")}>
              Quiero comprar
            </button>
            <button className={`option-button ${selectedOption === "vender" ? "active" : ""}`} onClick={() => onOptionSelect("vender")}>
              Quiero vender
            </button>
          </>
        )}
      </div>

      <div className="search-input-container" style={{ position: "relative" }}>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="¿Dónde querés mudarte?"
          onFocus={() => setShowDropdown(filteredLocalidades.length > 0)}
        />
        <button className="search-button" onClick={() => onSearch(searchTerm)}>
          Buscar
        </button>
        
        {showDropdown && (
          <ul ref={dropdownRef} className="locations-dropdown">
            {filteredLocalidades.map((localidad, index) => (
              <li key={index} className="location-item" onMouseDown={() => handleSelectLocalidad(localidad)}>
                {localidad}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
