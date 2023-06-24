import { useLocation } from 'react-router-dom';

const Filter = ({ setSelectedFilter }) => {
  const location = useLocation();

  return location.pathname === '/tweets' ? (
    <div className="">
      <label htmlFor="sort-select">Sort:</label>
      <select
        name="sort"
        id="sort-select"
        className={`relative appearance-none w-48 px-3 py-2 rounded-md text-sm font-semibold text-gray-900 shadow-sm cursor-pointer border-2 border-solid border-white hover:border-blue transition-colors bg-arrow-down bg-no-repeat bg-[right_-22px_top_7px] bg-[length:55px_55px]`}
        onChange={e => {
          setSelectedFilter(e.target.value);
        }}
      >
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </div>
  ) : (
    <div className="w-56"></div>
  );
};

export default Filter;
