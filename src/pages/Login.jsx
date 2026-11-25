import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  // Un useState por cada dato del formulario
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [recordarme, setRecordarme] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // useEffect: al abrir la página, si había un correo guardado lo recuperamos
  useEffect(() => {
    const correoGuardado = localStorage.getItem("correoRecordado");
    if (correoGuardado) {
      setCorreo(correoGuardado);
      setRecordarme(true);
    }
  }, []);

  const manejarEnvio = (e) => {
    e.preventDefault(); // evita que la página se recargue

    // «Recordarme»: guardamos o borramos el correo en el navegador
    if (recordarme) {
      localStorage.setItem("correoRecordado", correo);
    } else {
      localStorage.removeItem("correoRecordado");
    }

    // Todavía no hay backend, así que solo mostramos un mensaje de prueba
    setMensaje(`Bienvenido, ${correo} (inicio de sesión de prueba)`);
  };

  return (
    <AuthCard titulo="Iniciar sesión" subtitulo="Ingresa tus datos para continuar">
      <form onSubmit={manejarEnvio} className="space-y-4">
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

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-300">
            <input
              type="checkbox"
              checked={recordarme}
              onChange={(e) => setRecordarme(e.target.checked)}
              className="accent-sky-400"
            />
            Recordarme
          </label>
          <Link to="/recuperar" className="text-acento hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button type="submit">Iniciar sesión</Button>

        {mensaje && <p className="text-center text-sm text-green-400">{mensaje}</p>}
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        ¿No tienes cuenta?{" "}
        <Link to="/registro" className="font-semibold text-acento hover:underline">
          Crear una cuenta
        </Link>
      </p>
    </AuthCard>
  );
};

export default Login;
