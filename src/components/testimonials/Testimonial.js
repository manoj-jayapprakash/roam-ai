export const Testimonial = (props) => {
  return (
    <article className="testimonial spacer">
      <blockquote>
        <p className="testimonial__quote">{props.quote}</p>
      </blockquote>
      <div className="flex testimonial__author">
        <div className="testimonial__author-image">
          <img
            src={props.image}
            alt="Author "
            width="40"
            height="40"
            loading="lazy"
          />
        </div>
        <div className="testimonial__author-details">
          <h4 className="testimonial__author-name">{props.name}</h4>
          <p className="testimonial__author-role">{props.role}</p>
        </div>
      </div>
    </article>
  );
};
