import cardImg from '../assets/tours/tour-6-cover.jpg';
import { FiCalendar, FiFlag, FiMapPin, FiStar, FiUser } from 'react-icons/fi';

function TourCard() {
  return (
    <div className="grid md:grid-cols-[1.3fr_1.5fr_1fr] mb-10 md:mb-16">
      {/* Card Image */}
      <div className="rounded-t-2xl md:rounded-none md:rounded-l-2xl overflow-hidden">
        <img className="h-full" src={cardImg} alt="" />
      </div>
      {/* Card Text */}
      <div className="bg-emerald-50 p-8 py-10 md:py-12">
        <h3 className="font-bold text-3xl capitalize mb-4 text-gray-700">
          The Sea Explorer
        </h3>
        <p className="font-bold text-lg capitalize mb-1">medium 7-days tour</p>
        <p className="mb-4">
          Exploring the jaw-dropping US east coast by foot and by boat
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <FiFlag />
            <span>4 stops</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span>Miami, USA</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar />
            <span>June 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUser />
            <span>15 people</span>
          </div>
        </div>
      </div>
      {/* Card CTA */}
      <div className="text-green-50 rounded-b-2xl bg-emerald-700 text-center p-6 md:rounded-none md:rounded-r-2xl md:py-12">
        <p className="flex gap-4 items-center justify-center mb-4">
          <span>(6 reviews)</span>
          <span className="flex">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </span>
        </p>
        <p className="mb-8">
          <div className="font-extrabold text-5xl mb-1">$497</div>/ per person
        </p>
        <button className="bg-orange-500 px-4 py-2 font-semibold text-xl">
          Details
        </button>
      </div>
    </div>
  );
}
export default TourCard;
