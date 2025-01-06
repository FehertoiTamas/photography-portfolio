import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
    </>
  );
}
