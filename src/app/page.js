import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Portfolio from "@/components/Portfolio/Portfolio";
import ScrollingText from "@/components/ScrollingText/ScrollingText";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <ScrollingText />
      <Portfolio />
    </>
  );
}
