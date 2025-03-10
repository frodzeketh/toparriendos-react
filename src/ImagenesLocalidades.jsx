import React from "react";
import "./global.css"; // Asegúrate de que esta ruta esté bien
import vitacura from './img/img-localidades-vitacura.jpg'
import lacisterna from './img/img-localidades-lacisterna.jpg'
import lascondes from './img/img-localidades-lascondes.jpg'
import peñalolen from './img/img-localidades-peñalolen.jpg'
import santiagodechile from './img/img-localidades-santiagodechile.jpg'
import macul from './img/img-localidades-macul.jpg'



const ImagenesLocalidades = () => {
  return (
    <div className="content-container">
      <h1 className="heading-departaments">Departamentos</h1>
      <div className="department-list">
        <a href="#" className="department-item">
        <img src={santiagodechile} alt="Santiago de Chile" />
        <img/>
          <h2 className="department-title">Santiago de Chile</h2>
        </a>
        <a href="#" className="department-item">
        <img src={lacisterna} alt="La Cisterna" />
        <img/>
          <h2 className="department-title">La Cisterna</h2>
        </a>
        <a href="#" className="department-item">
        <img src={lascondes} alt="Las Condes" />
        <img/>
          <h2 className="department-title">Las Condes</h2>
        </a>
        <a href="#" className="department-item">
        <img src={vitacura} alt="Vitacura" />
        <img/>
         
          <h2 className="department-title">Vitacura</h2>
        </a>
        <a href="#" className="department-item">
          
        <img src={peñalolen} alt="Peñalolen" />
        <img/>
          <h2 className="department-title">Peñalolen</h2>
        </a>

        <a href="#" className="department-item">
          
        <img src={macul} alt="macul" />
        <img/>
          <h2 className="department-title">Macul</h2>
        </a>
      </div>
    </div>
  );
};

export default ImagenesLocalidades;
