import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Logo from "./Logo";

// Redes sociales: cambia los enlaces por los de tu empresa
const redes = [
  { nombre: "Facebook", url: "https://www.facebook.com", icono: <FaFacebook /> },
  { nombre: "Instagram", url: "https://www.instagram.com", icono: <FaInstagram /> },
  { nombre: "LinkedIn", url: "https://www.linkedin.com", icono: <FaLinkedin /> },
  { nombre: "GitHub", url: "https://github.com", icono: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-borde bg-tarjeta text-slate-300">
      {/* Cuatro columnas en escritorio, una sola en celular */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        {/* 1. Logo, descripción y redes sociales */}
        <div>
          <Logo />
          <p className="mt-3 text-sm">
            Interfaces claras, componentes sólidos y experiencias digitales.
          </p>
          <div className="mt-4 flex gap-4 text-2xl">
            {redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                aria-label={red.nombre}
                className="hover:text-acento"
              >
                {red.icono}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Enlaces a las páginas internas */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-acento">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-acento">Nuestro estudio</Link></li>
            <li><Link to="/contacto" className="hover:text-acento">Contacto</Link></li>
            <li><Link to="/login" className="hover:text-acento">Iniciar sesión</Link></li>
            <li><Link to="/registro" className="hover:text-acento">Crear una cuenta</Link></li>
          </ul>
        </div>

        {/* 3. Información de contacto */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-acento" /> hola@reactlab.dev
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-acento" /> +57 300 000 0000
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-acento" /> Medellín, Colombia
            </li>
          </ul>
        </div>

        {/* 4. Ubicación con Google Maps (iframe) */}
        <div>
          <h3 className="mb-3 font-semibold text-white">Ubicación</h3>
          <iframe
            title="Ubicación de ReactLab en Google Maps"
            src="https://www.google.com/maps?q=Medell%C3%ADn,+Colombia&output=embed"
            className="h-40 w-full rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Derechos reservados y propiedad intelectual */}
      <div className="border-t border-borde px-4 py-4 text-center text-xs text-slate-400">
        <p>© 2026 ReactLab. Todos los derechos reservados.</p>
        <p className="mt-1">
          El logotipo, los textos, las imágenes y el diseño de este sitio son propiedad
          intelectual de ReactLab. Queda prohibida su reproducción sin autorización.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
