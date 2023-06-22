import { useState, useEffect } from 'react';

const Card = ({ user, setFollowingIdList, followingIdList }) => {
  const isFollowing = followingIdList.includes(user.id);

  const toggleFollowing = () => {
    if (isFollowing) {
      setFollowingIdList(prev => {
        return prev.filter(id => id !== user.id);
      });
      return;
    }
    setFollowingIdList(prev => [...prev, user.id]);
  };

  return (
    <div>
      <img src={user.avatar} alt="" />
      <div>
        <p>{user.tweets} TWEETS</p>
        <p>{user.followers} FOLLOWERS</p>
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
