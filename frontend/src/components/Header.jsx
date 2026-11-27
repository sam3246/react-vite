import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/nosotros", texto: "Nuestro estudio" },
  { to: "/contacto", texto: "Contacto" },
];

// Clases del enlace: cambia de color si es la página activa
const claseEnlace = ({ isActive }) =>
  isActive
    ? "text-acento font-semibold"
    : "text-slate-300 hover:text-white";

const Header = () => {
  // Controla si el menú del celular está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    // fixed + top-0 = el navbar se queda fijo arriba al hacer scroll
    <header className="fixed top-0 left-0 z-50 w-full border-b border-borde bg-fondo">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />

        {/* Menú de escritorio (oculto en celular) */}
        <ul className="hidden items-center gap-6 md:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.to}>
              <NavLink to={enlace.to} end className={claseEnlace}>
                {enlace.texto}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className="rounded-lg bg-acento px-4 py-2 font-semibold text-fondo hover:bg-sky-300"
            >
              Iniciar sesión
            </NavLink>
          </li>
        </ul>

        {/* Botón hamburguesa (solo en celular) */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menú del celular: solo se muestra si menuAbierto es true */}
      {menuAbierto && (
        <ul className="flex flex-col gap-4 border-t border-borde bg-fondo px-4 py-4 md:hidden">
          {enlaces.map((enlace) => (
            <li key={enlace.to}>
              <NavLink
                to={enlace.to}
                end
                className={claseEnlace}
                onClick={() => setMenuAbierto(false)}
              >
                {enlace.texto}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className="text-acento font-semibold"
              onClick={() => setMenuAbierto(false)}
            >
              Iniciar sesión
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
