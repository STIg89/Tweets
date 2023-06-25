import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import BackBtn from './BackBtn';
import Filter from './Filter';

const MainLayout = ({ setSelectedFilter }) => {
  return (
    <div>
      <header className="h-[116px] flex justify-around items-center pt-8 pb-8 bg-slate-300 shadow-slate-600 shadow-2xl">
        <BackBtn />
        <Logo />
        <Filter setSelectedFilter={setSelectedFilter} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
