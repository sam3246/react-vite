import { useEffect, useState } from "react";
import imagen1 from "../assets/images/imagen1.jpg";
import imagen2 from "../assets/images/imagen2.jpg";
import imagen3 from "../assets/images/imagen3.jpg";
import imagen4 from "../assets/images/imagen4.jpg";
import imagen5 from "../assets/images/imagen5.avif";
import imagen6 from "../assets/images/imagen6.jpg";
import imagen7 from "../assets/images/imagen7.jpg";
import imagen8 from "../assets/images/imagen8.jpg";
import imagen9 from "../assets/images/imagen9.jpg";
import imagen10 from "../assets/images/imagen10.jpg";

const images = [
  { id: 1, image: imagen1, title: "Desarrollo de Software",
    description: "Creamos soluciones tecnológicas para las necesidades empresariales." },
  { id: 2, image: imagen2, title: "Inteligencia Artificial",
    description: "Tecnologías inteligentes que transforman nuestro futuro." },
  { id: 3, image: imagen3, title: "Computación",
    description: "Herramientas informáticas para mejorar los procesos." },
  { id: 4, image: imagen4, title: "Redes Informáticas",
    description: "Conectividad y comunicación entre dispositivos." },
  { id: 5, image: imagen5, title: "Seguridad Informática",
    description: "Protección de los datos y recursos digitales." },
  { id: 6, image: imagen6, title: "Innovación Tecnológica",
    description: "Nuevas ideas para solucionar problemas del entorno." },
  { id: 7, image: imagen7, title: "Transformación Digital",
    description: "Modernización de procesos mediante tecnologías digitales." },
  { id: 8, image: imagen8, title: "Servicios Tecnológicos",
    description: "Soluciones tecnológicas para empresas y organizaciones." },
  { id: 9, image: imagen9, title: "Infraestructura Tecnológica",
    description: "Recursos tecnológicos para garantizar la operación." },
  { id: 10, image: imagen10, title: "Soluciones Empresariales",
    description: "Tecnología orientada al crecimiento de las organizaciones." },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Conoce nuestro mundo tecnológico</h2>
        <p className="text-secondary">
          Innovación, conocimiento y soluciones para el futuro.
        </p>
      </div>

      <div className="carousel-container">
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="carousel-image"
        />
        <div className="carousel-caption-custom">
          <h3>{currentImage.title}</h3>
          <p>{currentImage.description}</p>
          <span>Imagen {currentIndex + 1} de {images.length}</span>
        </div>
        <button
          className="carousel-control previous"
          onClick={previousImage}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>
        <button
          className="carousel-control next"
          onClick={nextImage}
          aria-label="Imagen siguiente"
        >
          &#10095;
        </button>
      </div>

      <div className="carousel-indicators-custom">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Mostrar imagen ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
