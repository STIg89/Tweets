import { useState, useEffect } from 'react';
import { patchUserFollowers } from '../../services/fetchAPI';

const Card = ({ user, setFollowingIdList, followingIdList }) => {
  const [followers, setFollowers] = useState(user.followers);
  const isFollowing = followingIdList.includes(user.id);

  const toggleFollowing = async () => {
    if (isFollowing) {
      setFollowingIdList(prev => {
        return prev.filter(id => id !== user.id);
      });
      const data = await patchUserFollowers(user.id, followers - 1);
      console.log('data:', data.followers);
      setFollowers(data.followers);
      return;
    }
    setFollowingIdList(prev => [...prev, user.id]);
    const data = await patchUserFollowers(user.id, followers + 1);
    console.log('data:', data.followers);
    setFollowers(data.followers);
  };

  return (
    <div>
      <img src={user.avatar} alt="" />
      <div>
        <p>{user.tweets} TWEETS</p>
        <p>{followers} FOLLOWERS</p>
      </div>
      {!isFollowing ? (
        <button type="button" onClick={toggleFollowing}>
          FOLLOW
        </button>
      ) : (
        <button type="button" onClick={toggleFollowing}>
          FOLLOWING
        </button>
      )}
    </div>
  );
};

export default Card;
