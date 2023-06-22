import { useEffect, useState } from 'react';
import Card from './Card';
import getAllUsers from '../../services/fetchAPI';
const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getAll = async () => {
      if (currentPage === page) {
        return;
      }

      const fetchedUsers = await getAllUsers(page);
      setCurrentPage(page);

      if (users === fetchedUsers) {
        return;
      }
      setUsers(prev => [...prev, ...fetchedUsers]);
    };
    getAll();
  }, [page]);

  return (
    <div className="flex flex-wrap gap-7">
      {users.map(user => (
        <Card user={user} key={user.id} />
      ))}
    </div>
  );
};

export default CardList;
