import './Hero.css';
import hero from '../../assets/hero.svg';
export const Hero = () => {
  return (
    <section className="container hero">
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
      </div>
      <div className="hero__image">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};
