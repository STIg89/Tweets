import { Btn } from '../components/Tweets/Btn';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <NavLink to="/tweets">
        <Btn btnText={'GO TO TWEETS'} />
      </NavLink>
    </div>
  );
};

export default Home;
