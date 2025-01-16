import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Portfolio from "@/components/Portfolio/Portfolio";
import ScrollingText from "@/components/ScrollingText/ScrollingText";
import LensLines from "@/components/LensLines/LensLines";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <LensLines />
      <AboutMe />
      <ScrollingText />
      <Portfolio />
    </>
  );
}
