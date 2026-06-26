import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Barbers } from "@/components/Barbers";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Barbers />
        <Gallery />
        <Booking />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
