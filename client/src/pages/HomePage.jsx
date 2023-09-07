import { Navbar, Hero, Tours, Gallery, Cta, Footer } from '../components';

export default function HomePage() {
  return (
    <main>
      <Navbar className="bg-emerald-800" />
      <Hero />
      <Tours />
      <Gallery />
      <Cta />
      <Footer />
    </main>
  );
}
