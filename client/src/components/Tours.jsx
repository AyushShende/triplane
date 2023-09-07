import Button from './Button';
import TourCard from './TourCard';

export default function Tours() {
  return (
    <section className="padding-x padding-y">
      <p className="text-center font-shadows text-orange-500 text-xl">
        Popular Packages
      </p>
      <h2 className="font-bold text-gray-700 text-center mb-8 text-3xl md:mb-12 md:text-4xl">
        CHECKOUT OUR PACKAGES
      </h2>

      <TourCard />
      <TourCard />
      <TourCard />

      <Button className="mx-auto block">view all</Button>
    </section>
  );
}
