import './About.css';

import illustration from '../../assets/whyus.svg';

import { Stat } from './Stat';

export const About = () => {
  const data = [
    {
      number: '1.6M',
      title: 'funding',
      description: 'Raised by several investors around the world',
    },
    {
      number: '1000+',
      title: 'customers',
      description: 'Business and organizations cater to using Roam.ai',
    },
    {
      number: '36%',
      title: 'revenue',
      description: 'Comes from larger customers and the remaining is from SMBs',
    },
  ];
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
