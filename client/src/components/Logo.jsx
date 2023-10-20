import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <Link to="/">
      <img className="w-[150px]" src={logo} alt="triplane" />
    </Link>
  );
}
