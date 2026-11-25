import { useEffect, useState } from "react";

// Carrusel reutilizable: recibe la lista de imágenes por props (slides).
const Carousel = ({ slides }) => {
  const [indice, setIndice] = useState(0);
  const actual = slides[indice];

  const anterior = () => {
    setIndice(indice === 0 ? slides.length - 1 : indice - 1);
  };

  const siguiente = () => {
    setIndice((indice + 1) % slides.length);
  };

  // Cambia de imagen solo cada 5 segundos.
  // Si el usuario navega a mano, el tiempo se reinicia (por eso depende de "indice").
  useEffect(() => {
    const temporizador = setTimeout(siguiente, 5000);
    return () => clearTimeout(temporizador);
  });

  return (
    <section className="mx-auto max-w-5xl px-4">
      <div className="relative overflow-hidden rounded-xl border border-borde bg-tarjeta">
        {/* La altura cambia según el tamaño de pantalla */}
        <img
          src={actual.image}
          alt={actual.title}
          className="h-64 w-full object-cover sm:h-80 md:h-[28rem]"
        />

        {/* Título y descripción sobre la imagen */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent px-12 pb-4 pt-12 text-white sm:px-16">
          <h3 className="text-lg font-bold sm:text-2xl">{actual.title}</h3>
          <p className="text-sm text-slate-200 sm:text-base">{actual.description}</p>
          <span className="text-xs text-acento">
            Imagen {indice + 1} de {slides.length}
          </span>
        </div>

        {/* Flechas */}
        <button
          onClick={anterior}
          aria-label="Imagen anterior"
          className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/60 text-white hover:bg-acento hover:text-fondo"
        >
          ❮
        </button>
        <button
          onClick={siguiente}
          aria-label="Imagen siguiente"
          className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/60 text-white hover:bg-acento hover:text-fondo"
        >
          ❯
        </button>
      </div>

      {/* Puntos para ir directo a una imagen */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndice(i)}
            aria-label={`Mostrar imagen ${i + 1}`}
            className={`h-3 rounded-full ${
              i === indice ? "w-8 bg-acento" : "w-3 bg-slate-600"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
