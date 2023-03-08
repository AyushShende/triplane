import tourist1 from '../assets/gallery/tourist1.jpg';
import tourist2 from '../assets/gallery/tourist2.jpg';
import tourist3 from '../assets/gallery/tourist3.jpg';
import tourist4 from '../assets/gallery/tourist4.jpg';
import tourist5 from '../assets/gallery/tourist5.jpg';

function Gallery() {
  return (
    <section className="px-6 py-6 md:py-14 md:px-20 bg-green-50">
      <p className="text-center tracking-wide	 text-orange-500 uppercase text-lg">
        Photo Gallery
      </p>
      <h2 className="font-bold text-gray-700 text-center mb-2 text-3xl md:text-4xl">
        PHOTOS FROM TRAVELLERS
      </h2>
      <p className="text-center mb-10">
        Here are some glimpses of our travellers that will put a smile on your
        face.
      </p>
      {/* PHOTO GRID */}
      <div className="grid grid-cols-2 gap-4 md:auto-rows-[380px] md:grid-cols-3">
        <div className="rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={tourist1} alt="" />
        </div>
        <div className="rounded-3xl overflow-hidden row-span-2">
          <img className="w-full h-full object-cover" src={tourist4} alt="" />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={tourist2} alt="" />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={tourist3} alt="" />
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={tourist5} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Gallery;
