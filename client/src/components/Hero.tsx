import hero from '../assets/heroAlt.png';
import Navbar from './Navbar';

function Hero() {
  return (
    <header className="bg-green-50 px-6 md:px-20 min-h-screen mb-8">
      <Navbar />
      <div className="flex flex-col gap-10 items-center md:flex-row md:mt-10">
        <div className="flex-1 md:pr-4">
          <p className="font-shadows text-orange-500 text-lg mb-1">
            Rediscover Yourself!
          </p>
          <h1 className="font-bold mb-4 text-3xl md:text-5xl">
            EXPLORE THE WORLD
          </h1>
          <p className="mb-6">
            The tour of a lifetime that you've been day-dreaming about is
            totally possible. Come let us make memories worth remembering! Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-emerald-600 py-2 px-4 font-semibold text-lg capitalize transition-all ease-in-out duration-300 text-green-50 hover:bg-emerald-700">
            Explore Now
          </button>
        </div>
        <div className="flex-1">
          <img className="" src={hero} alt="happy tourists" />
        </div>
      </div>
    </header>
  );
}
export default Hero;
