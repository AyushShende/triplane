import { cn } from '../utils/cn';

export default function Button({ children, className, secondary, ...rest }) {
  return (
    <button
      className={cn(
        'bg-orange-500 hover:bg-orange-400 font-semibold text-xl text-white capitalize px-4 py-2 transition ease-in disabled:opacity-50 disabled:cursor-not-allowed',
        className,
        { 'bg-emerald-700 hover:bg-emerald-600': secondary }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
