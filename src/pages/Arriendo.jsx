// src/pages/Arriendo.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import CardAlquiler from "../components/CardAlquiler";

const Arriendo = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const fetchPropiedades = async () => {
      const q = query(collection(db, "propiedades"), where("tipo", "==", "arriendo"));
      const querySnapshot = await getDocs(q);
      const propiedadesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPropiedades(propiedadesData);
    };

    fetchPropiedades();
  }, []);

  return (
    <div>
      <h1>Propiedades en Arriendo</h1>
      <div className="propiedades-list">
        {propiedades.map((propiedad) => (
          <CardAlquiler key={propiedad.id} propiedad={propiedad} />
        ))}
      </div>
    </div>
  );
};

export default Arriendo;