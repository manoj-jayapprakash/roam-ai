import './Clients.css';

import hugo from '../../assets/hugo.webp';
import scrowd from '../../assets/scrowd.webp';
import zomato from '../../assets/zomato.webp';
import lets from '../../assets/lets.png';

export const Clients = () => {
  return (
    <section>
      <ul className="container spacer clients">
        <li className="client">
          <img src={hugo} alt="Hugo company logo" />
        </li>
        <li className="client">
          <img src={scrowd} alt="Sprint crowd company logo" />
        </li>
        <li className="client">
          <img src={zomato} alt="Zomato company logo" />
        </li>
        <li className="client">
          <img src={lets} alt="Lets Tracker company logo" />
        </li>
      </ul>
    </section>
  );
};
