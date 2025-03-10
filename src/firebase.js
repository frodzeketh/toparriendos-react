import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración para el carrusel
const firebaseConfigCarrousel = {
  apiKey: "AIzaSyC2zzYTK4j2P3Y6XAAHG-S0FzRi6CCAa40",
  authDomain: "top-arriendos-carrousel.firebaseapp.com",
  projectId: "top-arriendos-carrousel",
  storageBucket: "top-arriendos-carrousel.appspot.com",
  messagingSenderId: "438330176827",
  appId: "1:438330176827:web:2d6db21bf2a5d08874f31e",
  measurementId: "G-RJZ3DZSXQD",
};

// Configuración para las propiedades
const firebaseConfigPropiedades = {
  apiKey: "AIzaSyDsazcwiAhbQIYCII3vhML7LQOHH9AK934",
  authDomain: "top-arriendo-cards.firebaseapp.com",
  projectId: "top-arriendo-cards",
  storageBucket: "top-arriendo-cards.appspot.com",
  messagingSenderId: "463125047989",
  appId: "1:463125047989:web:12fb5e0498da595833acfc",
  measurementId: "G-69K7ZFFH43",
};

// Inicializar la primera app (para el carrusel)
const appCarrousel = initializeApp(firebaseConfigCarrousel, "carrousel");
const analyticsCarrousel = getAnalytics(appCarrousel);
const dbCarrousel = getFirestore(appCarrousel); // Firestore para el carrusel

// Inicializar la segunda app (para las propiedades)
const appPropiedades = initializeApp(firebaseConfigPropiedades, "propiedades");
const dbPropiedades = getFirestore(appPropiedades); // Firestore para las propiedades
const auth = getAuth(appPropiedades); // Authentication (si lo necesitas)

// Exportar todo
export { appCarrousel, analyticsCarrousel, dbCarrousel, dbPropiedades, auth };