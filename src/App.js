import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home";
import Arriendo from "./pages/Arriendo";
import Comprar from "./pages/Comprar"; // Importa la página de compra
import Blog from "./pages/Blog";
import Publica from "./pages/Publica";
import Contacto from "./pages/Contacto";
import PropiedadDetalle from "./pages/PropiedadDetalle";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arriendo" element={<Arriendo />} />
        <Route path="/comprar" element={<Comprar />} /> {/* Ruta para compra */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/publica" element={<Publica />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/propiedad/:id" element={<PropiedadDetalle />} /> {/* Ruta dinámica */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;