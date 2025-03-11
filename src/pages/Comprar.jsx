// src/pages/Comprar.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { dbPropiedades } from "../firebase";
import CardAlquiler from "../components/CardAlquiler";
import "../global.css";

const Comprar = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Obtener el parámetro de localidad de la URL
  const searchParams = new URLSearchParams(location.search);
  const localidad = searchParams.get("localidad");

  useEffect(() => {
    const fetchPropiedades = async () => {
      try {
        // Consulta a Firebase
        const propiedadesRef = collection(dbPropiedades, "propiedades");
        let q;

        if (localidad) {
          // Filtrar por tipo "venta" y localidad
          q = query(
            propiedadesRef,
            where("tipo", "==", "venta"),
            where("ubicacion", "==", localidad)
          );
        } else {
          // Filtrar solo por tipo "venta"
          q = query(propiedadesRef, where("tipo", "==", "venta"));
        }

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setPropiedades(data);
        } else {
          console.log("No se encontraron propiedades en venta.");
        }
      } catch (error) {
        console.error("Error fetching propiedades:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropiedades();
  }, [localidad]);

  if (loading) {
    return <div className="page-title">Cargando propiedades...</div>;
  }

  return (
    <div className="comprar-page">
      <h1 className="page-title">
        {localidad
          ? `Propiedades en Venta en ${localidad}`
          : "Todas las propiedades en venta"}
      </h1>
      <div className="cards-container">
        {propiedades.length === 0 ? (
          <p className="page-title">No hay propiedades disponibles.</p>
        ) : (
          propiedades.map((propiedad) => (
            <CardAlquiler key={propiedad.id} propiedad={propiedad} />
          ))
        )}
      </div>
    </div>
  );
};

export default Comprar;