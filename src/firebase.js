// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Si deseas usar otros servicios de Firebase, los importas aquí, por ejemplo:
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2zzYTK4j2P3Y6XAAHG-S0FzRi6CCAa40",
  authDomain: "top-arriendos-carrousel.firebaseapp.com",
  projectId: "top-arriendos-carrousel",
  storageBucket: "top-arriendos-carrousel.firebasestorage.app",
  messagingSenderId: "438330176827",
  appId: "1:438330176827:web:2d6db21bf2a5d08874f31e",
  measurementId: "G-RJZ3DZSXQD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Si deseas usar Firestore o Authentication, los inicializas aquí también
const db = getFirestore(app); // Para base de datos
const auth = getAuth(app); // Para autenticación

export { app, analytics, db, auth }; // Exportas lo que vayas a utilizar en tu proyecto
