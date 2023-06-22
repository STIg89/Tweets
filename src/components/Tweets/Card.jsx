const Card = ({ user }) => {
  return (
    <div>
      <img src={user.avatar} alt="" />
      <div>
        <p>{user.tweets} TWEETS</p>
        <p>{user.followers} FOLLOWERS</p>
      </div>
      <button type="button">{user.iFollowing ? 'FOLLOWING' : 'FOLLOW'}</button>
    </div>
  );
};

export default Card;
