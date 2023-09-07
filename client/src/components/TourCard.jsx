import cardImg from '../assets/tours/tour-1-cover.jpg';
import { FiCalendar, FiFlag, FiMapPin, FiStar, FiUser } from 'react-icons/fi';
import Button from './Button';

export default function TourCard() {
  return (
    <div className="grid md:grid-cols-8 mb-10 md:mb-16 max-w-6xl mx-auto">
      {/* Card Image */}
      <div className="rounded-t-2xl md:col-span-3 md:rounded-none md:rounded-l-2xl overflow-hidden">
        <img className="h-full" src={cardImg} alt="tour cover image" />
      </div>

      {/* Card Text */}
      <div className="bg-emerald-50 md:col-span-3 p-6 box-border">
        <h3 className="font-bold text-3xl capitalize mb-4 text-gray-700">
          The Kerala Coast
        </h3>
        <p className="font-bold text-lg capitalize mb-1">Easy 10-days tour</p>
        <p className="mb-4">
          Exploring the jaw-dropping Kerala coast by foot and by boat
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <FiFlag />
            <span>8 stops</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span>Kerala, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar />
            <span>Sept 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUser />
            <span>20 people</span>
          </div>
        </div>
      </div>

      {/* Card CTA */}
      <div className="text-green-50 md:col-span-2 rounded-b-2xl p-6 box-border bg-emerald-700 text-center md:rounded-none md:rounded-r-2xl">
        <div className="flex gap-4 items-center justify-center mb-4">
          <span>(8 reviews)</span>
          <span className="flex">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </span>
        </div>
        <div className="mb-8">
          <div className="font-extrabold text-4xl mb-1">₹ 2000</div>/ per person
        </div>

        <Button>Details</Button>
      </div>
    </div>
  );
}
