import { cn } from '../utils/cn';
import Button from './Button';
import Logo from './Logo';

export default function Navbar({ className }) {
  return (
    <nav
      className={cn(
        'flex justify-between items-center py-4 padding-x',
        className
      )}
    >
      <Logo />

      <Button>Login</Button>
    </nav>
  );
}
