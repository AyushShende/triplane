import TourCard from './TourCard';

function Tours() {
  return (
    <section className="py-6 px-6 md:py-14 md:px-40">
      <p className="text-center tracking-wide	 text-orange-500 uppercase text-lg">
        Popular Packages
      </p>
      <h2 className="font-bold text-gray-700 text-center mb-8 text-3xl md:mb-12 md:text-4xl">
        CHECKOUT OUR PACKAGES
      </h2>
      <TourCard />
      <TourCard />
      <TourCard />

      <button className="bg-emerald-600 mx-auto block py-2 px-4 font-semibold text-lg capitalize transition-all ease-in-out duration-300 text-green-50 hover:bg-emerald-700">
        View All
      </button>
    </section>
  );
}
export default Tours;
