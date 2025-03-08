// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración para el carrusel (tu configuración actual)
const firebaseConfigCarrousel = {
  apiKey: "AIzaSyC2zzYTK4j2P3Y6XAAHG-S0FzRi6CCAa40",
  authDomain: "top-arriendos-carrousel.firebaseapp.com",
  projectId: "top-arriendos-carrousel",
  storageBucket: "top-arriendos-carrousel.firebasestorage.app",
  messagingSenderId: "438330176827",
  appId: "1:438330176827:web:2d6db21bf2a5d08874f31e",
  measurementId: "G-RJZ3DZSXQD",
};

// Configuración para las propiedades (nueva configuración)
const firebaseConfigPropiedades = {
  apiKey: "AIzaSyDsazcwiAhbQIYCII3vhML7LQOHH9AK934",
  authDomain: "top-arriendo-cards.firebaseapp.com",
  projectId: "top-arriendo-cards",
  storageBucket: "top-arriendo-cards.firebasestorage.app",
  messagingSenderId: "463125047989",
  appId: "1:463125047989:web:12fb5e0498da595833acfc",
  measurementId: "G-69K7ZFFH43",
};

// Inicializar la primera app (para el carrusel)
const appCarrousel = initializeApp(firebaseConfigCarrousel, "carrousel");
const analyticsCarrousel = getAnalytics(appCarrousel);

// Inicializar la segunda app (para las propiedades)
const appPropiedades = initializeApp(firebaseConfigPropiedades, "propiedades");
const db = getFirestore(appPropiedades); // Firestore para las propiedades
const auth = getAuth(appPropiedades); // Authentication (si lo necesitas)

// Exportar todo
export { appCarrousel, analyticsCarrousel, db, auth };