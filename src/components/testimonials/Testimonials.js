import './Testimonials.css';

import { Testimonial } from './Testimonial';
import monica from '../../assets/avatar-aiysha.jpg';

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We did build our own location tracking solution. Although I'm proud of it, switching to Roam was a great decision as our customers spotted the ..",
      author: 'Monica',
      image: monica,
      role: 'Senior Engineer',
    },
    {
      quote:
        "We did build our own location tracking solution. Although I'm proud of it, switching to Roam was a great decision as our customers spotted the ..",
      author: 'Monica',
      image: monica,
      role: 'Senior Engineer',
    },
    {
      quote:
        "We did build our own location tracking solution. Although I'm proud of it, switching to Roam was a great decision as our customers spotted the ..",
      author: 'Monica',
      image: monica,
      role: 'Senior Engineer',
    },
    {
      quote:
        "We did build our own location tracking solution. Although I'm proud of it, switching to Roam was a great decision as our customers spotted the ..",
      author: 'Monica',
      image: monica,
      role: 'Senior Engineer',
    },
  ];
  return (
    <section className="testimonials txt-center">
      <div className="spacer testimonials__left">
        <p className="section__title">Testimonials</p>
        <h2 className="section__subtitle">See what our customers say</h2>
        <p className="section__description">
          Developers from startups to large enterprises use our SDK and APIs to
          build accurate and efficient location-aware apps.
        </p>
        <div className="section__links">
          <a href="https://google.com">View full story</a>
        </div>
      </div>
      <div className="testimonials__right spacer">
        {testimonials.map((testimonial) => (
          <Testimonial
            quote={testimonial.quote}
            name={testimonial.author}
            image={testimonial.image}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
};
