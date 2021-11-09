import fb from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

export const Social = () => {
  return (
    <div className="flex social">
      <img src={fb} alt="Facebook logo" width="30" height="30" />
      <img src={twitter} alt="Twitter logo" width="30" height="30" />
      <img src={youtube} alt="Youtube logo" width="30" height="30" />
    </div>
  );
};
