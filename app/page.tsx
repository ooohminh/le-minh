import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Philosophy from "@/components/philosophy";
import Services from "@/components/services";
import SelectedWork from "@/components/selected-work";
import Closing from "@/components/closing";
import Footer from "@/components/footer";
import FilmGrain from "@/components/film-grain";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <>
      <FilmGrain />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <SelectedWork />
        <Closing />
      </main>
      <Footer />
    </>
  );
}