import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Recuperar from "./pages/Recuperar";

const App = () => {
  return (
    <>
      <Header />

      {/* pt-16 deja espacio para que el navbar fijo no tape el contenido */}
      <div className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar" element={<Recuperar />} />
          <Route
            path="*"
            element={
              <div className="py-20 text-center">
                <h1 className="text-5xl font-bold text-acento">404</h1>
                <p className="mt-2 text-slate-400">La ruta que buscas no existe.</p>
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
