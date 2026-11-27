// Tarjeta centrada que usan Login, Registro y Recuperar contraseña.
const AuthCard = ({ titulo, subtitulo, children }) => {
  return (
    <main className="flex justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-borde bg-tarjeta p-6 shadow-lg sm:p-8">
        <h1 className="text-2xl font-bold text-white">{titulo}</h1>
        <p className="mb-6 mt-1 text-sm text-slate-400">{subtitulo}</p>
        {children}
      </div>
    </main>
  );
};

export default AuthCard;
