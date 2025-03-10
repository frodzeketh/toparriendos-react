// src/pages/Comprar.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbPropiedades } from "../firebase";
import CardAlquiler from "../components/CardAlquiler";
import "../global.css";

const Comprar = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropiedades = async () => {
      try {
        // Obtener solo propiedades de tipo "venta"
        const propiedadesRef = collection(dbPropiedades, "propiedades");
        const q = query(propiedadesRef, where("tipo", "==", "venta"));
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
  }, []);

  if (loading) {
    return <div>Cargando propiedades...</div>;
  }

  return (
    <div className="comprar-page">
      <h1 className="page-title">Propiedades en Venta</h1>
      <div className="cards-container">
        {propiedades.length === 0 ? (
          <p>No hay propiedades disponibles.</p>
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