import { useEffect, useState } from 'react';
import Card from './Card';
import { getAll, getFollowing } from '../../utils/filterOptions';

const CardList = ({ selectedFilter }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [followingIdList, setFollowingIdList] = useState(
    () => JSON.parse(localStorage.getItem('followingIdList')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('followingIdList', JSON.stringify(followingIdList));
  }, [followingIdList]);

  useEffect(() => {
    setPage(1);
    setUsers([]);
  }, [selectedFilter]);

  useEffect(() => {
    if (selectedFilter === 'all') {
      const data = { page, setCurrentPage, setUsers };
      getAll(data);
    }
    if (selectedFilter === 'followings') {
      const data = { page, setCurrentPage, setUsers, followingIdList };
      getFollowing(data);
    }
  }, [page, selectedFilter]);

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
