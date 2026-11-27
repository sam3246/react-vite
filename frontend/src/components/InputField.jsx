// Campo de formulario reutilizable (etiqueta + input).
const InputField = ({ id, label, type = "text", value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-lg border border-borde bg-fondo px-3 py-2 text-white placeholder-slate-500 focus:border-acento focus:outline-none"
      />
    </div>
  );
};

export default InputField;
