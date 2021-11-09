import './Hero.css';

//Import necessary images
import hero from '../../assets/hero.svg';
import apple from '../../assets/apple.png';
import android from '../../assets/android.png';

export const Hero = () => {
  return (
    <section className="container flex hero">
      <div className="hero__content spacer">
        <p className="section__title uppercase">Location SDK</p>
        <h1 className="fs-700 hero__title">
          High accuracy location <span className="highlight">SDK</span>
        </h1>
        <p className="hero__subtitle">
          Developers from startups to large enterprises use our SDK and APIs to
          build accurate and efficient location-aware apps.
        </p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="google.com">
            Start for free
          </a>
          <a className="btn btn-secondary" href="google.com">
            Contact Sales
          </a>
        </div>
        <div className="mobile__sdks flex">
          <img src={apple} alt="Apple icon" width="25" height="25" />
          <img src={android} alt="Android icon" width="30" height="30" />
        </div>
      </div>
      <div className="hero__image">
        <img src={hero} alt="Woman boarding a blue car" />
      </div>
    </section>
  );
};
