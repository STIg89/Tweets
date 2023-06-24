import { useEffect, useState } from 'react';
import { getInitialFollowIdList } from '../../utils/initialUsersIds';
import Card from './Card';
import { getAll, getFiltered } from '../../utils/filterOptions';

const CardList = ({ selectedFilter }) => {
  let [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [followingIdList, setFollowingIdList] = useState(
    () => JSON.parse(localStorage.getItem('followingIdList')) ?? []
  );
  const [followIdList, setFollowIdList] = useState(
    () =>
      JSON.parse(localStorage.getItem('followIdList')) ??
      getInitialFollowIdList()
  );

  const getUsers = reqPage => {
    const data = {
      reqPage,
      setPage,
      setUsers,
      followingIdList,
      followIdList,
      selectedFilter,
    };

    if (selectedFilter === 'all') {
      getAll(data);
    } else {
      getFiltered(data);
    }
  };

  useEffect(() => {
    localStorage.setItem('followingIdList', JSON.stringify(followingIdList));
    localStorage.setItem('followIdList', JSON.stringify(followIdList));
  }, [followingIdList, followIdList]);

  useEffect(() => {
    setUsers([]);
    const reqPage = 1;
    getUsers(reqPage);
  }, [selectedFilter]);

  const onClickLoadMore = () => {
    const reqPage = page + 1;
    getUsers(reqPage);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-12 pt-12 pb-[100px] justify-center">
        {users.map(user => (
          <Card
            user={user}
            setFollowingIdList={setFollowingIdList}
            followingIdList={followingIdList}
            followIdList={followIdList}
            setFollowIdList={setFollowIdList}
            setUsers={setUsers}
            selectedFilter={selectedFilter}
            key={user.id}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          onClickLoadMore();
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default CardList;
