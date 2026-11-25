import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [hayError, setHayError] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Validación sencilla: las contraseñas deben ser iguales
    if (contrasena !== confirmar) {
      setHayError(true);
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    setHayError(false);
    setMensaje(`Cuenta creada para ${nombre} (registro de prueba)`);
  };

  return (
    <AuthCard titulo="Crear una cuenta" subtitulo="Completa el formulario para registrarte">
      <form onSubmit={manejarEnvio} className="space-y-4">
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
          id="contrasena"
          label="Contraseña"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="••••••••"
        />
        <InputField
          id="confirmar"
          label="Confirmar contraseña"
          type="password"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          placeholder="••••••••"
        />

        <Button type="submit">Registrarme</Button>

        {mensaje && (
          <p className={`text-center text-sm ${hayError ? "text-red-400" : "text-green-400"}`}>
            {mensaje}
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="font-semibold text-acento hover:underline">
          Iniciar sesión
        </Link>
      </p>
    </AuthCard>
  );
};

export default Registro;
