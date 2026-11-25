// Botón reutilizable con el estilo de la aplicación.
const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-lg bg-acento px-4 py-2 font-semibold text-fondo hover:bg-sky-300"
    >
      {children}
    </button>
  );
};

export default Button;
