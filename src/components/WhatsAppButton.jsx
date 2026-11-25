import { FaWhatsapp } from "react-icons/fa";

// Botón flotante de WhatsApp (siempre visible abajo a la derecha).
// Formato del enlace: https://wa.me/<código país + número>?text=<mensaje>
// Cambia el número por el real de la empresa.
const numero = "573000000000";
const mensaje = "Hola, quiero más información sobre ReactLab";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-lg hover:bg-green-600"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
