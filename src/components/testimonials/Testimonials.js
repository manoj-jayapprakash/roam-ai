import './Testimonials.css';

import { Testimonial } from './Testimonial';
import { testimonials } from './testimonial-data';
export const Testimonials = () => {
  return (
    <section className="container testimonials txt-center" id="section-3">
      <div className="spacer testimonials__left">
        <p className="section__title">Testimonials</p>
        <h2 className="section__subtitle">See what our customers say</h2>
        <p className="section__description">
          Developers from startups to large enterprises use our SDK and APIs to
          build accurate and efficient location-aware apps.
        </p>
        <div>
          <a className="section__links" href="https://google.com">
            View full story
          </a>
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
