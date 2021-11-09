export const FooterLinks = (props) => {
  return (
    <li className="footer__list--item fs-200 ">
      <a href={props.url}>{props.title}</a>
    </li>
  );
};
