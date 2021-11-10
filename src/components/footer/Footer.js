import './Footer.css';

import { Social } from '../utils/Social';

import { FooterLinks } from './FooterLinks';
import { products, usecases, developers, company } from './footer-data';
export const Footer = () => {
  return (
    <footer className="spacer footer">
      <div className="footer__left ">
        <div className="footer__logo">
          <h2>ROAM</h2>
        </div>
        <hr className="footer__decorative" />
        <Social />
      </div>
      <div className="flex footer__right ">
        <ul className="footer__list responsive-alignment">
          <li className="footer__list--title ">Products</li>
          {products.map((product) => (
            <FooterLinks title={product.title} url={product.url} />
          ))}
        </ul>
        <ul className="footer__list responsive-alignment">
          <li className="footer__list--title">Use cases</li>
          {usecases.map((usecase) => (
            <FooterLinks title={usecase.title} url={usecase.url} />
          ))}
        </ul>
        <ul className="footer__list responsive-alignment">
          <li className="footer__list--title">Developers</li>
          {developers.map((developer) => (
            <FooterLinks title={developer.title} url={developer.url} />
          ))}
        </ul>
        <ul className="footer__list responsive-alignment">
          <li className="footer__list--title">Company</li>
          {company.map((c) => (
            <FooterLinks title={c.title} url={c.url} />
          ))}
        </ul>
      </div>
      <div className="footer__bottom responsive-alignment flex fs-200">
        <p className="copyrights">&copy; 2021 Roam BV</p>
        <a href="https://www.google.com">Terms of Service</a>
        <a href="https://www.google.com">Privacy Policy</a>
        <a href="https://www.google.com">Data Protection Addendum</a>
      </div>
    </footer>
  );
};
