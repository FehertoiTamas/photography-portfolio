'use client';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar-text",
      { opacity: 1, scale: 1, transformOrigin: "left bottom" },
      {
        opacity: 0,
        scale: 0.4,
        duration: 2,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".navbar-text",
          start: "center 20%",
          end: "bottom 10%",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".logo",
      { opacity: 0, scale: 0, transformOrigin: "right bottom" },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".navbar-text",
          start: "center 20%",
          end: "bottom 10%",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".links",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".navbar-text",
          start: "center 20%",
          end: "bottom 10%",
          scrub: true,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="navbar-container">
        <nav className="navbar">
          <div className="logo">Photography</div>
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul className={`links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#" data-text="Home">Home</a></li>
            <li><a href="#" data-text="About Me">About Me</a></li>
            <li><a href="#" data-text="My Works">My Works</a></li>
            <li><a href="#" data-text="Extras">Extras</a></li>
            <li><a href="#" data-text="Contact">Contact</a></li>
          </ul>
        </nav>
        <p className="navbar-text">Photography</p>
      </section>
    </>
  );
}
