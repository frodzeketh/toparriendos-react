import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Arriendo from "./pages/Arriendo";
import Comprar from "./pages/Comprar";
import Blog from "./pages/Blog";
import Publica from "./pages/Publica";
import Contacto from "./pages/Contacto";
import NavBar from "./NavBar";
import Footer from "./Footer"; // Importamos el Footer

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
      </Routes>
      <Footer /> {/* Agregamos el Footer para que se muestre en todas las páginas */}
    </Router>
  );
}

export default App;
