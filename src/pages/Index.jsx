import Carousel from "../components/Carousel";

const Index = () => {
  return (
    <main>
      <section className="container text-center my-5">
        <h1 className="display-5 fw-bold">Bienvenidos a Mi Empresa</h1>
        <p className="lead text-secondary">
          Conoce nuestras soluciones y servicios tecnológicos.
        </p>
      </section>
      <Carousel />
    </main>
  );
};

export default Index;
