import Carousel from "../components/Carousel";
import slides from "../data/slides";

const Index = () => {
  return (
    <main>
      <section className="px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Bienvenidos a React<span className="text-acento">Lab</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          Creamos aplicaciones web modernas con React y una experiencia cuidada.
        </p>
      </section>

      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Descubre cómo damos vida a React
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Del primer componente al despliegue de una aplicación completa.
        </p>
      </div>

      <Carousel slides={slides} />
    </main>
  );
};

export default Index;
