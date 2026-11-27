const Nosotros = () => {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-white">Nuestro estudio</h1>
      <p className="text-lg text-slate-300">
        Somos un equipo de desarrollo enfocado en crear interfaces
        web claras, accesibles y mantenibles con React.
      </p>
      <p className="mt-3 text-slate-400">
        Transformamos ideas en aplicaciones reales mediante componentes
        reutilizables, navegación consistente y buenas prácticas de desarrollo.
      </p>

      {/* Dos tarjetas: una columna en celular, dos en pantallas medianas */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-borde bg-tarjeta p-6">
          <h2 className="mb-2 text-xl font-semibold text-acento">Misión</h2>
          <p className="text-slate-400">
            Diseñar experiencias web útiles con React, cuidando el rendimiento,
            la accesibilidad y la facilidad de mantenimiento.
          </p>
        </div>
        <div className="rounded-xl border border-borde bg-tarjeta p-6">
          <h2 className="mb-2 text-xl font-semibold text-acento">Visión</h2>
          <p className="text-slate-400">
            Ser un estudio reconocido por construir aplicaciones React
            claras, confiables y preparadas para seguir creciendo.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
