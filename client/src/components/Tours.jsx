import { getTours } from '../api/toursApi';
import Button from './Button';
import TourCard from './TourCard';
import { useQuery } from '@tanstack/react-query';

export default function Tours() {
  const { data: tours } = useQuery({ queryKey: ['tours'], queryFn: getTours });

  return (
    <section className="padding-x padding-y">
      <p className="text-center font-shadows text-orange-500 text-xl">
        Popular Packages
      </p>
      <h2 className="font-bold text-gray-700 text-center mb-8 text-3xl md:mb-12 md:text-4xl">
        CHECKOUT OUR PACKAGES
      </h2>
      {tours?.map((tour) => {
        return <TourCard tour={tour} key={tour._id} />;
      })}

      <Button className="mx-auto block">view all</Button>
    </section>
  );
}
