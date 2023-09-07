import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Logo from './Logo';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="padding-x pt-6 md:pt-10 lg:pt-16 pb-2 bg-emerald-800 text-gray-200">
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* First Col */}
        <div>
          <Logo />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            accusamus, ullam id magnam, ipsum doloremque sit ex aliquam
            accusamus, ullam id magnam, ipsum doloremque sit ex aliquam
          </p>
        </div>

        {/* Second Col */}

        <ul className="md:justify-self-center">
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

        {/* Third Col */}
        <div>
          <p className="mb-2">
            Subscribe to our newsletter for new tour updates
          </p>
          <input
            className="block px-4 py-2 mb-4 text-gray-800 outline-none w-full"
            type="text"
            placeholder="Enter your email"
          />

          <Button>Subscribe</Button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-xs md:flex text-center justify-between">
        <p className="mb-1">&#169; Made by Ayush. All rights reserved</p>

        <ul className="flex items-center justify-center gap-4">
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  );
}
