import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home';
import Tweets from './pages/Tweets';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
