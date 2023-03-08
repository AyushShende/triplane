import Navbar from '../components/Navbar';
import {
  FiClock,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiUser,
  FiStar,
} from 'react-icons/fi';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
function Tour() {
  return (
    <main className="">
      <header className="px-6 md:px-20 relative h-screen bg-tour bg-center bg-cover bg-no-repeat bg-gray-500 bg-blend-multiply">
        <Navbar />
        <div className="text-center mt-14 text-green-50">
          <h1 className="font-bold text-3xl mb-4 md:text-6xl">
            The Snow Adventurer
          </h1>
          <div className="flex gap-4 justify-center font-semibold">
            <p className="flex gap-1 items-center">
              <FiClock />
              <span>3 days</span>
            </p>
            <p className="flex gap-1 items-center">
              <FiMapPin />
              <span>Miami, USA</span>
            </p>
          </div>
        </div>
      </header>
      <section className="px-6 md:px-20 md:grid md:grid-cols-2 justify-items-center">
        <div>
          <div>
            <h3 className="font-bold text-2xl md:text-4xl">Quick Facts</h3>
            <p>kdjsjs</p>
            <p>kdjsjs</p>
            <p>kdjsjs</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl md:text-4xl">Your Tour Guides</h3>
            <p>kdjsjs</p>
            <p>kdjsjs</p>
            <p>kdjsjs</p>
          </div>
        </div>
        <div className="w-5/6">
          <h3 className="font-bold text-2xl md:text-4xl">
            About the Snow Adventurer Tour
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            asperiores itaque magni beatae mollitia omnis eligendi deleniti
            illum odit maiores, tempora consequatur voluptatum impedit! Officia
            optio atque necessitatibus natus deleniti?
          </p>
        </div>
      </section>
      <Cta />
      <Footer />
    </main>
  );
}
export default Tour;
