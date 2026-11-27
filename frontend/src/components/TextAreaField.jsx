// Campo de texto largo reutilizable (etiqueta + textarea).
const TextAreaField = ({ id, label, value, onChange, placeholder, rows = 5 }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full resize-y rounded-lg border border-borde bg-fondo px-3 py-2 text-white placeholder-slate-500 focus:border-acento focus:outline-none"
      />
    </div>
  );
};

export default TextAreaField;
