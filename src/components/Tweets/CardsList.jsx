import { useEffect, useState } from 'react';
import Card from './Card';
import getAllUsers from '../../services/fetchAPI';

const CardList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [followingIdList, setFollowingIdList] = useState(
    () => JSON.parse(localStorage.getItem('followingIdList')) ?? []
  );
  console.log('followingIdList:', followingIdList);

  useEffect(() => {
    localStorage.setItem('followingIdList', JSON.stringify(followingIdList));
  }, [followingIdList]);

  useEffect(() => {
    const getAll = async () => {
      const fetchedUsers = await getAllUsers(page);
      setUsers(prev => [...prev, ...fetchedUsers]);
      setCurrentPage(page);
    };
    getAll();
  }, [page]);

  return (
    <div>
      <div className="flex flex-wrap gap-7">
        {users.map(user => (
          <Card
            user={user}
            setFollowingIdList={setFollowingIdList}
            followingIdList={followingIdList}
            key={user.id}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          setPage(prev => prev + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default CardList;
