import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Recuperar = () => {
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true); // simulamos el envío del correo
  };

  return (
    <AuthCard
      titulo="Recuperar contraseña"
      subtitulo="Escribe tu correo y te enviaremos instrucciones"
    >
      <form onSubmit={manejarEnvio} className="space-y-4">
        <InputField
          id="correo"
          label="Correo electrónico"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
        />
        <Button type="submit">Enviar instrucciones</Button>
        {enviado && (
          <p className="text-center text-sm text-green-400">
            Si el correo existe, recibirás las instrucciones (mensaje de prueba).
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-sm">
        <Link to="/login" className="text-acento hover:underline">
          ← Volver a iniciar sesión
        </Link>
      </p>
    </AuthCard>
  );
};

export default Recuperar;
