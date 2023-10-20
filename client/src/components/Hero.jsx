import hero from '../assets/heroAlt.png';
import Button from './Button';

function Hero() {
  return (
    <section className="bg-green-50 grid grid-cols-1 gap-20 items-center md:grid-cols-2 pt-40 pb-8 md:pb-16 padding-x">
      <div>
        <p className="font-shadows text-orange-500 text-lg mb-1">
          Rediscover Yourself!
        </p>
        <h1 className="font-bold text-gray-700 mb-4 text-3xl md:text-5xl">
          EXPLORE THE WORLD
        </h1>
        <p className="mb-6">
          The tour of a lifetime that you&apos;ve been day-dreaming about is
          totally possible. Come let us make memories worth remembering! Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button>explore now</Button>
      </div>

      <img src={hero} alt="happy tourists" />
    </section>
  );
}
export default Hero;
