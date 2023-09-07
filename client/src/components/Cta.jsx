import Button from './Button';

export default function Cta() {
  return (
    <section className="padding-x padding-y text-center md:text-left md:flex md:justify-between">
      <div className="md:w-3/4">
        <p className="font-shadows text-orange-500 mb-2 text-xl">
          Let&apos;s make lifelong memories
        </p>
        <h2 className="font-bold text-gray-700 mb-4 text-3xl lg:text-4xl">
          WHAT ARE YOU WAITING FOR?
        </h2>

        <p className="mb-4">
          10 days, 1 adventure, infinite memories. Make it yours, today! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque
          vitae suscipit incidunt, consectetur voluptate recusandae repellendus
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Button>Book Now</Button>
      </div>
    </section>
  );
}
