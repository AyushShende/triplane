import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="px-6 pt-6 bg-footer bg-cover bg-no-repeat bg-center bg-emerald-700 bg-blend-multiply text-gray-200 gap-10 md:pt-14 md:px-20 md:grid md:grid-cols-3">
      {/* First Col */}
      <div className="md:w-5/6 mb-6 md:mb-0">
        <Logo />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          accusamus, ullam id magnam, ipsum doloremque sit ex aliquam provident
          voluptatem pariatur! Dolorum aut earum, iure soluta
        </p>
      </div>

      {/* Second Col */}
      <div className="md:w-5/6 mb-6 md:mb-0">
        <ul className="">
          <li className="font-bold text-xl capitalize mb-2">Contact us</li>
          <li className="flex items-center gap-2 mb-1">
            <span>
              <FiMail />
            </span>
            <span>ayushshende9@gmail.com</span>
          </li>
          <li className="flex items-center gap-2 mb-1">
            <span>
              <FiMapPin />
            </span>
            <span>Leaf Village, Land of Fire</span>
          </li>
          <li className="flex items-center gap-2 mb-1">
            <span>
              <FiPhone />
            </span>
            <span>+91 887755333825</span>
          </li>
        </ul>
      </div>

      {/* Third Col */}
      <div className="md:w-5/6 mb-6 md:mb-0">
        <p className="mb-2">Subscribe to our newsletter for new tour updates</p>
        <input
          className="block px-4 py-2 mb-4 text-gray-800 outline-none w-full"
          type="text"
          placeholder="enter your email"
        />
        <button className="bg-orange-500 px-4 py-2 font-semibold text-lg">
          Subscribe
        </button>
      </div>

      {/* Copyright Section */}
      <div className="col-span-3 text-xs md:flex justify-between">
        <div className="mb-1">&#169; Made by Ayush. All rights reserved</div>
        <div>
          <ul className="flex gap-4">
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
