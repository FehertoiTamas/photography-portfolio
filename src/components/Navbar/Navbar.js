'use client';
import { useEffect } from 'react'
import './Navbar.css'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useEffect(() => {
    gsap.fromTo(
      ".navbar-text",
      { opacity: 1, scale: 1, transformOrigin: "left bottom" }, // Kezdőállapot
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
      { opacity: 0, scale: 0, transformOrigin: "right bottom" }, // Kezdőállapot
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

    // Linkek mozgása jobbra
    gsap.fromTo(
      ".links",
      { opacity: 0, scale: 0 }, // Kezdőállapot
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

    // Cleanup: Törlés a komponens eltávolításakor
    return () => {
      animation.kill(); // Az animáció törlése
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Minden ScrollTrigger törlése
    };

  }, [])

  return (
    <>
      <section className='navbar-container'>
        <nav className='navbar'>
          <div className='logo'>Photography</div>
          <ul className='links'
          >
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                data-text="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                data-text="Blogs"
              >
                About me
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                data-text="Coding"
              >
                My works
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                data-text="Extras"
              >
                Extras
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                data-text="Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <p className='navbar-text'>Photography</p>
      </section>
    </>
  )
}
