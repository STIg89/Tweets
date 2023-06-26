import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home';
import Tweets from './pages/Tweets';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainLayout setSelectedFilter={setSelectedFilter} />}
        >
          <Route index element={<Home />} />
          <Route
            path="tweets"
            element={<Tweets selectedFilter={selectedFilter} />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
