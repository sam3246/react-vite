const Contacto = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">Contáctanos</h1>
        <p className="mt-2 text-slate-400">
          Cuéntanos tu idea y hablamos sobre cómo construirla con React.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-borde bg-tarjeta p-6">
        <h2 className="text-xl font-semibold text-white">Información de contacto</h2>
        <p>
          <strong className="text-acento">Correo electrónico:</strong><br />
          hola@reactlab.dev
        </p>
        <p>
          <strong className="text-acento">Teléfono:</strong><br />
          +57 300 000 0000
        </p>
        <p>
          <strong className="text-acento">Dirección:</strong><br />
          Medellín, Colombia
        </p>
        <p>
          <strong className="text-acento">Horario de atención:</strong><br />
          Lunes a viernes, de 8:00 a. m. a 5:00 p. m.
        </p>
      </div>
    </main>
  );
};

export default Contacto;
