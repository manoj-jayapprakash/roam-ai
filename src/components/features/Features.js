import { Feature } from './Feature';

import { data } from './features-data';

export const Features = () => {
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
