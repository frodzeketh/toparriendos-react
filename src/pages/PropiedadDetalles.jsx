// src/pages/PropiedadDetalle.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbPropiedades } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const PropiedadDetalle = () => {
  const { id } = useParams(); // Obtener el ID de la propiedad desde la URL
  const [propiedad, setPropiedad] = useState(null);

  // Consultar Firebase para obtener los detalles de la propiedad
  useEffect(() => {
    const fetchPropiedad = async () => {
      try {
        const propiedadRef = doc(dbPropiedades, "propiedades", id);
        const propiedadDoc = await getDoc(propiedadRef);

        if (propiedadDoc.exists()) {
          setPropiedad({ id: propiedadDoc.id, ...propiedadDoc.data() });
        } else {
          console.log("No se encontró la propiedad.");
        }
      } catch (error) {
        console.error("Error al obtener la propiedad:", error);
      }
    };

    fetchPropiedad();
  }, [id]);

  if (!propiedad) {
    return <div>Cargando...</div>; // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div>
      <h1>Detalles de la propiedad</h1>
      <div className="propiedad-detalle">
        <h2>{propiedad.ubicacion}</h2>
        <p>{propiedad.descripcion}</p>
        <p>Precio: {propiedad.price}</p>
        <p>Tipo: {propiedad.tipo}</p>
        <p>Ambientes: {propiedad.ambientes}</p>
        <p>Baños: {propiedad.baños}</p>
        <p>Metros cuadrados: {propiedad.metrosTotales} m²</p>
        <img src={propiedad.img} alt={propiedad.ubicacion} />
      </div>
    </div>
  );
};

export default PropiedadDetalle;