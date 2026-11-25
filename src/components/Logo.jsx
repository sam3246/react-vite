import { Link } from "react-router-dom";

// Logotipo de la aplicación. Se usa en el Header y en el Footer.
const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
      {/* Círculo de color como símbolo del logo */}
      <span className="h-3 w-3 rounded-full bg-acento"></span>
      React<span className="text-acento">Lab</span>
    </Link>
  );
};

export default Logo;
