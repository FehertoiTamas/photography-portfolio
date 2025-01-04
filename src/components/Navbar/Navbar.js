'use client';
import { useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  useEffect(() => {

  }, [])

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>Photography</div>
        <ul>
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
              Blogs
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              data-text="Coding"
            >
              Coding
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              data-text="Skills"
            >
              Skills
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
    </>
  )
}
