import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import Navigation from './Navigation';
import Filter from './Filter';

const MainLayout = ({ setSelectedFilter }) => {
  return (
    <div>
      <header className="flex justify-between items-center">
        <Logo />
        <Navigation />
        <Filter setSelectedFilter={setSelectedFilter} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
