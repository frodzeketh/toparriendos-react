// src/pages/Arriendo.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import CardAlquiler from "../components/CardAlquiler";

const Arriendo = () => {
  const [propiedades, setPropiedades] = useState([]);
  const location = useLocation();

  // Obtener la localidad desde la URL
  const queryParams = new URLSearchParams(location.search);
  const localidad = queryParams.get("localidad");

  // Consultar Firebase
  useEffect(() => {
    const fetchPropiedades = async () => {
      // Construir la consulta
      const q = query(
        collection(db, "propiedades"),
        where("tipo", "==", "arriendo"),
        where("ubicacion", "==", localidad)
      );

      // Ejecutar la consulta
      const querySnapshot = await getDocs(q);
      const propiedadesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Depuración: Ver los datos obtenidos
      console.log("Propiedades obtenidas:", propiedadesData);

      // Actualizar el estado con las propiedades obtenidas
      setPropiedades(propiedadesData);
    };

    if (localidad) {
      fetchPropiedades();
    }
  }, [localidad]);

  return (
    <div>
      <h1>Propiedades en Arriendo - {localidad}</h1>
      <div className="propiedades-list">
        {propiedades.map((propiedad) => (
          <CardAlquiler key={propiedad.id} propiedad={propiedad} />
        ))}
      </div>
    </div>
  );
};

export default Arriendo;