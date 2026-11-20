const Contacto = () => {
  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contáctanos</h1>
        <p className="lead text-secondary">
          Estamos disponibles para atender tus inquietudes.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h4 className="mb-4">Información de contacto</h4>
              <p><strong>Correo electrónico:</strong><br />
                contacto@miempresa.com</p>
              <p><strong>Teléfono:</strong><br />+57 300 000 0000</p>
              <p><strong>Dirección:</strong><br />Medellín, Colombia</p>
              <p><strong>Horario de atención:</strong><br />
                Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
