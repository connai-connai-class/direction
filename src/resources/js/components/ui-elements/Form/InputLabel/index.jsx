export default function InputLabel({
  label,
  className = "",
  children,
  ...props
}) {
  return (
    <label
      {...props}
      className={`block font-medium text-sm text-gray-700 ` + className}
    >
      {label ? label : children}
    </label>
  );
}
