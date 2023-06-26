import { useEffect, useState } from 'react';
import { getInitialFollowIdList } from '../../utils/getInitialFollowIdList';
import Card from './Card';
import { getAll, getFiltered } from '../../utils/filterOptions';
import { Loader } from '../../utils/loader';
import { Btn } from './Btn';

const CardList = ({ selectedFilter }) => {
  let [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [noMoreUsers, setNoMoreUsers] = useState(false);
  const [followingIdList, setFollowingIdList] = useState(
    () => JSON.parse(localStorage.getItem('followingIdList')) ?? []
  );
  const [followIdList, setFollowIdList] = useState(
    () => JSON.parse(localStorage.getItem('followIdList')) ?? []
  );

  const getUsers = async reqPage => {
    const data = {
      reqPage,
      setPage,
      setUsers,
      followingIdList,
      followIdList,
      selectedFilter,
    };

    if (selectedFilter === 'all') {
      await getAll(data);
    } else {
      await getFiltered(data);
    }
    setIsLoading(false);
    setIsLoadingMore(false);
  };

  useEffect(() => {
    if (followIdList.length === 0) {
      getInitialFollowIdList(setFollowIdList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('followingIdList', JSON.stringify(followingIdList));
    localStorage.setItem('followIdList', JSON.stringify(followIdList));
  }, [followingIdList, followIdList]);

  useEffect(() => {
    setIsLoading(true);
    setUsers([]);
    const reqPage = 1;
    getUsers(reqPage);
  }, [selectedFilter]);

  useEffect(() => {
    if (
      (selectedFilter === 'all' &&
        users.length === followIdList.length + followingIdList.length) ||
      (selectedFilter === 'followings' &&
        users.length === followingIdList.length) ||
      (selectedFilter === 'follow' && users.length === followIdList.length)
    ) {
      setNoMoreUsers(true);
    } else {
      setNoMoreUsers(false);
    }
  }, [users]);

  const onClickLoadMore = () => {
    setIsLoadingMore(true);
    const reqPage = page + 1;
    getUsers(reqPage);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
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
      <div className="py-8 text-center">
        {isLoadingMore ? (
          <Loader />
        ) : noMoreUsers ? (
          <></>
        ) : (
          <Btn btnText={'Load more...'} action={onClickLoadMore} />
        )}
      </div>
    </div>
  );
};

export default CardList;
