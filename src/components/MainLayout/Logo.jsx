import { NavLink } from 'react-router-dom';
import LogoImg from '../../assets/images/LogoImg.png';

const Logo = () => {
  return (
    <NavLink to="/tweets">
      <img
        className="w-28  shadow-lg shadow-gray-50 hover:shadow-neutral-400 rounded-lg"
        src={LogoImg}
        alt="logo"
      />
    </NavLink>
  );
};

export default Logo;
