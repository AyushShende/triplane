export default function FormValidationError({ children, error }) {
  return (
    <p className="text-red-500 text-sm font-medium mt-2">{error && children}</p>
  );
}
