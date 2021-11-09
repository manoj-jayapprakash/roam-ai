import './Feature.css';

export const Feature = (props) => {
  return (
    <div className="spacer feature">
      <div className="feature__image-wrapper">
        <img
          src={props.image}
          alt=""
          width="30"
          height="30"
          className="feature__image"
        />
      </div>
      <h3 className="feature__title">{props.title}</h3>
      <p className="feature__description">{props.description}</p>
    </div>
  );
};
