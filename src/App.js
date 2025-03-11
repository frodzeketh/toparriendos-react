// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NoticiaDetalle from './NoticiaDetalle'; // Asegúrate de que este archivo exista
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home";
import Arriendo from "./pages/Arriendo";
import Comprar from "./pages/Comprar";
import Blog from "./pages/Blog";
import Publica from "./pages/Publica";
import Contacto from "./pages/Contacto";
import PropiedadDetalle from "./pages/PropiedadDetalle";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TyC from "./pages/TyC"; // Importa el nuevo componente
import Informacion from "./pages/Informacion"; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arriendo" element={<Arriendo />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/publica" element={<Publica />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
        <Route path="/noticia-detalle" element={<NoticiaDetalle />} />
        <Route path="/tyc" element={<TyC />} /> {/* Nueva ruta */}
        <Route path="/informacion" element={<Informacion />} /> {/* Nueva ruta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;