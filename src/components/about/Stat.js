export const Stat = (props) => {
  return (
    <div className="stat spacer">
      <h3 className="stat__number fs-600">{props.number}</h3>
      <p className="stat__title uppercase fs-300">{props.title}</p>
      <p className="stat__description fs-300">{props.description}</p>
    </div>
  );
};
