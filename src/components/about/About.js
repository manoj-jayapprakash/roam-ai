import './About.css';

import illustration from '../../assets/whyus.svg';

import { Stat } from './Stat';
import { data } from './stats-data';
export const About = () => {
  return (
    <section className="container spacer responsive-alignment">
      <p className="section__title">why roam.ai?</p>
      <div className="flex details">
        <h2 className="section__subtitle">
          Roam.ai is made especially for developers who develop mobile apps for
          public or business
        </h2>
        <img
          className="about__illustration"
          src={illustration}
          alt=""
          width="400"
          height="400"
          loading="lazy"
        />
      </div>
      <div className="stats spacer">
        {data.map((d) => (
          <Stat number={d.number} title={d.title} description={d.description} />
        ))}
      </div>
    </section>
  );
};
