import "./PagesNav.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Link from "next/link";

const PagesNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

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
          <ul className={`links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link href="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link href="/myWorksPage">{t("navbar.my_works")}</Link>
            </li>
            <li>
              <Link href="/contactMe">{t("navbar.contact_me")}</Link>
            </li>
            <LanguageSwitcher />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default PagesNav;
