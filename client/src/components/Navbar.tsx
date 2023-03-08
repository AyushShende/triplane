import user from '../assets/user-12.jpg';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="flex justify-between py-10">
      <Logo />
      <div className="flex items-center gap-2">
        <img className="w-[50px] rounded-full" src={user} alt="" />
        <p className="uppercase font-semibold text-orange-400">Eliana</p>
      </div>
    </nav>
  );
}
export default Navbar;
