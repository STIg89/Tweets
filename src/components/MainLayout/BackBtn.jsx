import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BackBtn = () => {
  const location = useLocation();

  return location.pathname === '/tweets' ? (
    <NavLink
      to="/"
      className="rounded-[10px] py-3.5 w-[196px] shadow-btnShadow bg-white hover:bg-whiteHover text-center"
    >
      BACK
    </NavLink>
  ) : (
    <div className="w-[196px]"></div>
  );
};

export default BackBtn;
