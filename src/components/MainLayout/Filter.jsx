import { useLocation } from 'react-router-dom';

const Filter = () => {
  const location = useLocation();

  return location.pathname === '/tweets' ? (
    <div className="w-24">FILTER</div>
  ) : (
    <div className="w-24"></div>
  );
};

export default Filter;
