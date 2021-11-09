import './Contact.css';

import { Button } from '../utils/Button';

export const Contact = () => {
  return (
    <section className="container spacer txt-center" id="section-2">
      <h2 className="section__subtitle ">Get Started with Roam</h2>
      <p className="contact__description">
        Developers from startups to large enterprises use our SDK and APIs to
        build accurate and efficient location-aware apps.
      </p>
      <Button
        type="Primary"
        address="https://google.com"
        value={'Start for free'}
      />
      <Button
        type="Secondary"
        address="https://google.com"
        value={'Contact Sales'}
      />
    </section>
  );
};
{
  /* <Button
            type="Primary"
            address="https://google.com"
            value={'Start for free'}
          />
          <Button
            type="Secondary"
            address="https://google.com"
            value={'Contact Sales'}
          /> */
}
