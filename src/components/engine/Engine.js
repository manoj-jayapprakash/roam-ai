import './Engine.css';

import native from '../../assets/native-gps.png';
import roam from '../../assets/roam-sdk.png';
export const Engine = () => {
  return (
    <section className="responsive-alignment spacer">
      <h2 className="section__subtitle ">
        Precise data with our Accuracy Engine
      </h2>
      <p>
        Get consistent and noise-free location data powered by data filters and
        IMU sensor fusion with up to 5 meters accuracy.
      </p>
      <div className="section__links">
        <a href="https://google.com">view documentation</a>
      </div>
      <div className="compare__sdks spacer">
        <img src={native} alt="Native gps with upto 65 meters accuracy" />
        <img src={roam} alt="Roam sdk provides upto 15 meters accuracy" />
      </div>
    </section>
  );
};
