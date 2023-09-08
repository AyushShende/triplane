export default function Field({ icon: Icon, label, text, image }) {
  return (
    <div className="flex gap-2 items-center mb-4">
      {Icon && (
        <span className="text-emerald-600 font-bold">
          <Icon size={22} />
        </span>
      )}
      {image && <img className="rounded-full w-[40px]" src={image} />}
      <span className="font-semibold capitalize">{label}</span>
      <span className="capitalize">{text}</span>
    </div>
  );
}
