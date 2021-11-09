import tracking from '../../assets/tracking.png';
import accuracy from '../../assets/idea.png';
import efficient from '../../assets/clock.png';

import { Feature } from './Feature';

export const Features = () => {
  const data = [
    {
      title: 'Customizable Tracking',
      description:
        'Developers from startups to large enterprises use our SDK and APIs to build accurate and efficient location-aware apps.',
      image: tracking,
    },
    {
      title: 'High accuracy- 2x more',
      description:
        'Developers from startups to large enterprises use our SDK and APIs to build accurate and efficient location-aware apps.',
      image: accuracy,
    },
    {
      title: 'Battery efficient - 90% less',
      description:
        'Developers from startups to large enterprises use our SDK and APIs to build accurate and efficient location-aware apps.',
      image: efficient,
    },
  ];
  return (
    <section
      className="container spacer features responsive-alignment"
      id="section-1"
    >
      <p className="section__title">Location SDK</p>
      <h2 className="section__subtitle">Why build with Roam?</h2>
      <div className="spacer all-features">
        {data.map((d) => (
          <Feature
            image={d.image}
            title={d.title}
            description={d.description}
          />
        ))}
      </div>
    </section>
  );
};
