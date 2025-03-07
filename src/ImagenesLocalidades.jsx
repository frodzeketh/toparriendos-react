import React from "react";
import "./global.css"; // Asegúrate de que esta ruta esté bien

const ImagenesLocalidades = () => {
  return (
    <div className="content-container">
      <h1 className="heading-departaments">Departamentos</h1>
      <div className="department-list">
        <a href="#" className="department-item">
          <img
            src="./img/B9D57625-293F-441D-817B53BBE527C8F7.jpg"
            alt="Rhône"
          />
          <h2 className="department-title">Santiago de Chile</h2>
        </a>
        <a href="#" className="department-item">
          <img
            src="./img/Lacisterna.jpg"
            alt="Charente-Maritime"
          />
          <h2 className="department-title">La Cisterna</h2>
        </a>
        <a href="#" className="department-item">
          <img
            src="./img/las-condes-metro-escuela-militar-santiago.jpg"
            alt="Finistère"
          />
          <h2 className="department-title">Las Condes</h2>
        </a>
        <a href="#" className="department-item">
          <img
            src="./img/Parque_Bicentenario,_Vitacura,_Santiago_20200314_07.jpg"
            alt="Haut-Rhin"
          />
          <h2 className="department-title">Vitacura</h2>
        </a>
        <a href="#" className="department-item">
          <img
            src="./img/file_20170219192020.jpg"
            alt="Seine-et-Marne"
          />
          <h2 className="department-title">Peñalolen</h2>
        </a>
      </div>
    </div>
  );
};

export default ImagenesLocalidades;
