import {
  FiClock,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiUser,
  FiStar,
} from 'react-icons/fi';

import { Cta, Field } from '../components';

import userImg from '../assets/user-12.jpg';

import tour1 from '../assets/tours/tour-1-1.jpg';
import tour2 from '../assets/tours/tour-1-2.jpg';
import tour3 from '../assets/tours/tour-1-3.jpg';
import { useParams } from 'react-router-dom';
import { getTour } from '../api/toursApi';
import { useQuery } from '@tanstack/react-query';

export default function TourPage() {
  const { tourId } = useParams();
  const { data: tour } = useQuery({
    queryKey: ['tour', tourId],
    queryFn: () => getTour(tourId),
  });

  return (
    <>
      {/* HERO SECTION */}
      <header className="h-screen bg-tour bg-center bg-cover bg-no-repeat bg-gray-500 bg-blend-multiply">
        <div className="text-center pt-52 text-gray-200">
          <h1 className="font-bold text-3xl mb-4 md:text-6xl capitalize">
            {tour?.name}
          </h1>
          <div className="flex gap-4 justify-center font-semibold">
            <span className="flex gap-1 items-center">
              <FiClock />
              <span>{tour?.duration} days</span>
            </span>
            <span className="flex gap-1 items-center">
              <FiMapPin />
              <span>{tour?.startLocation.description}</span>
            </span>
          </div>
        </div>
      </header>

      {/* ABOUT TOUR */}
      <section className="padding-x padding-y grid sm:grid-cols-2">
        {/* LEFT COLUMN */}
        <div>
          <div className="mb-6">
            <h3 className="font-bold text-2xl mb-4 md:text-4xl">Quick Facts</h3>
            <Field icon={FiCalendar} text="12 Jun" label="Next Date" />
            <Field
              icon={FiTrendingUp}
              label="Difficulty"
              text={tour?.difficulty || ''}
            />
            <Field
              icon={FiUser}
              label="Participants"
              text={tour?.maxGroupSize || ''}
            />
            <Field
              icon={FiStar}
              label="Rating"
              text={tour?.ratingsAverage || ''}
            />
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4 md:text-4xl">
              Your Tour Guides
            </h3>
            {tour?.guides.map((guide) => (
              <Field
                key={guide._id}
                image={userImg}
                label={guide.role}
                text={guide.name}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h3 className="font-bold text-2xl mb-4 md:text-4xl">
            About {tour?.name}
          </h3>
          <p>{tour?.description}</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="grid md:grid-cols-2 gap-6 px-6 bg-green-50 py-6 md:py-14">
        {/* Testimonials */}
        <div>
          <h4 className="font-shadows text-orange-500 text-xl">Testimonials</h4>
          <h2 className="font-bold text-2xl pb-8 pt-2 md:text-4xl">
            Once you try it, you can&apos;t go back
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="">
              <div className="flex mb-2">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p className="mb-2 md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla, eius quod deserunt.
              </p>
              <p className="py-2 md:py-3 capitalize font-semibold border-t-gray-400 border-t-2">
                - Tony Stark
              </p>
            </div>
            <div className="">
              <div className="flex mb-2">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p className="mb-2 md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla, eius quod deserunt.
              </p>
              <p className="py-2 md:py-3 capitalize font-semibold border-t-gray-400 border-t-2">
                - Tony Stark
              </p>
            </div>
            <div className="">
              <div className="flex mb-2">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p className="mb-2 md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla, eius quod deserunt.
              </p>
              <p className="py-2 md:py-3 capitalize font-semibold border-t-gray-400 border-t-2">
                - Tony Stark
              </p>
            </div>
            <div className="">
              <div className="flex mb-2">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p className="mb-2 md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nulla, eius quod deserunt.
              </p>
              <p className="py-2 md:py-3 capitalize font-semibold border-t-gray-400 border-t-2">
                - Tony Stark
              </p>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="grid gap-4 grid-cols-2">
          <div className="overflow-hidden">
            <img
              className="transition-all duration-300 ease-in h-full hover:scale-105"
              src={tour1}
              alt="tour image"
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="transition-all duration-300 ease-in h-full hover:scale-105"
              src={tour2}
              alt="tour image"
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="transition-all duration-300 ease-in h-full hover:scale-105"
              src={tour3}
              alt="tour image"
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="transition-all duration-300 ease-in h-full hover:scale-105"
              src={tour3}
              alt="tour image"
            />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
