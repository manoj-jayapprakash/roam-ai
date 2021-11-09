export const Button = (props) => {
  if (props.type === 'Primary')
    return (
      <a className="btn btn-primary" href={props.address}>
        {props.value}
      </a>
    );
  else if (props.type === 'Secondary')
    return (
      <a className="btn btn-secondary" href={props.address}>
        {props.value}
      </a>
    );
};
