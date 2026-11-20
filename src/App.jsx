import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="*"
          element={
            <div className="container text-center my-5">
              <h1>404</h1>
              <p>La página que buscas no existe.</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
