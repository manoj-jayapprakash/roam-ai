import './Header.css';

import { useState } from 'react';

import hamburger from '../../assets/hamburger.png';
import close from '../../assets/delete.png';

export const Header = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);
  const mobileView = window.matchMedia('(max-width: 768px)');
  const toggleMobileMenu = () => {
    mobileView.matches && setViewMobileMenu(!viewMobileMenu);
  };
  return (
    <header className="header">
      <h2 className="header__logo">ROAM</h2>
      <button className="hamburger" onClick={toggleMobileMenu}>
        <img src={hamburger} alt="Hamburger Menu" width="30" height="30" />
      </button>
      <nav className={viewMobileMenu ? 'navbar__mobile' : 'navbar'}>
        <ul className="nav__list">
          <li className="nav__item">
            <a
              className="nav__link"
              href="#section-1"
              onClick={toggleMobileMenu}
            >
              Products
            </a>
          </li>
          <li className="nav__item ">
            <a
              className="nav__link"
              href="#section-2"
              onClick={toggleMobileMenu}
            >
              Pricing
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="#section-3"
              onClick={toggleMobileMenu}
            >
              Developers
            </a>
          </li>
          <li className="nav__item ">
            <a
              className="nav__link"
              href="#section-4"
              onClick={toggleMobileMenu}
            >
              Resources
            </a>
          </li>
          <li className="nav__item close-icon">
            <img
              className="close"
              src={close}
              alt=""
              width="30"
              height="30"
              onClick={toggleMobileMenu}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
