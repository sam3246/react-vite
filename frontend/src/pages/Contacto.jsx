import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import InputField from "../components/InputField";
import TextAreaField from "../components/TextAreaField";
import Button from "../components/Button";

const Contacto = () => {
  // Un useState por cada dato del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault(); // evita que la página se recargue

    // Todavía no hay backend, así que solo simulamos el envío
    setEnviado(true);
    setNombre("");
    setCorreo("");
    setTelefono("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">Contáctanos</h1>
        <p className="mt-2 text-slate-400">
          Cuéntanos tu idea y hablamos sobre cómo construirla con React.
        </p>
      </div>

      {/* Formulario a la izquierda, información a la derecha (apilados en celular) */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Formulario de contacto */}
        <form
          onSubmit={manejarEnvio}
          className="space-y-4 rounded-xl border border-borde bg-tarjeta p-6 lg:col-span-3"
        >
          <h2 className="text-xl font-semibold text-white">Envíanos un mensaje</h2>

          <InputField
            id="nombre"
            label="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />
          <InputField
            id="correo"
            label="Correo electrónico"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
          />
          <InputField
            id="telefono"
            label="Teléfono"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+57 300 000 0000"
          />
          <InputField
            id="asunto"
            label="Asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            placeholder="¿Sobre qué quieres hablar?"
          />
          <TextAreaField
            id="mensaje"
            label="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Cuéntanos sobre tu proyecto..."
          />

          <Button type="submit">Enviar mensaje</Button>

          {enviado && (
            <p className="text-center text-sm text-green-400">
              ¡Gracias! Recibimos tu mensaje y te responderemos pronto (envío de prueba).
            </p>
          )}
        </form>

        {/* Información de contacto */}
        <div className="space-y-4 rounded-xl border border-borde bg-tarjeta p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold text-white">Información de contacto</h2>
          <p className="flex items-start gap-3">
            <MdEmail className="mt-1 shrink-0 text-xl text-acento" />
            <span>
              <strong className="text-acento">Correo electrónico:</strong>
              <br />
              hola@reactlab.dev
            </span>
          </p>
          <p className="flex items-start gap-3">
            <MdPhone className="mt-1 shrink-0 text-xl text-acento" />
            <span>
              <strong className="text-acento">Teléfono:</strong>
              <br />
              +57 300 000 0000
            </span>
          </p>
          <p className="flex items-start gap-3">
            <MdLocationOn className="mt-1 shrink-0 text-xl text-acento" />
            <span>
              <strong className="text-acento">Dirección:</strong>
              <br />
              Medellín, Colombia
            </span>
          </p>
          <p className="flex items-start gap-3">
            <MdAccessTime className="mt-1 shrink-0 text-xl text-acento" />
            <span>
              <strong className="text-acento">Horario de atención:</strong>
              <br />
              Lunes a viernes, de 8:00 a. m. a 5:00 p. m.
            </span>
          </p>
        </div>
      </div>

      {/* Mapa (antes estaba en el footer) */}
      <section className="mt-6 rounded-xl border border-borde bg-tarjeta p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">Ubicación</h2>
        <iframe
          title="Ubicación de ReactLab en Google Maps"
          src="https://www.google.com/maps?q=Medell%C3%ADn,+Colombia&output=embed"
          className="h-72 w-full rounded-lg border-0 sm:h-96"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default Contacto;
