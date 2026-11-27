import { Link } from "react-router-dom";
import icono from "../assets/images/icono.png";

// Logotipo de la aplicación. Se usa en el Header y en el Footer.
const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
      {/* Icono de ReactLab como símbolo del logo */}
      <img src={icono} alt="Icono de ReactLab" className="h-8 w-8" />
      React<span className="text-acento">Lab</span>
    </Link>
  );
};

export default Logo;
