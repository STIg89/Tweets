import { useState } from 'react';
import { patchUserFollowers } from '../../services/fetchAPI';
import { Btn } from './Btn';
import logo from '../../assets/images/Logo.png';

const Card = ({
  user,
  setFollowingIdList,
  followingIdList,
  setFollowIdList,
}) => {
  const [followers, setFollowers] = useState(user.followers);
  const isFollowing = followingIdList.includes(user.id);

  const toggleFollowing = async () => {
    const addId = prev => [...prev, user.id];
    const deleteId = prev => prev.filter(id => id !== user.id);

    if (isFollowing) {
      setFollowingIdList(deleteId);
      setFollowIdList(addId);
      const data = await patchUserFollowers(user.id, followers - 1);
      setFollowers(data.followers);
      return;
    }
    setFollowingIdList(addId);
    setFollowIdList(deleteId);
    const data = await patchUserFollowers(user.id, followers + 1);
    setFollowers(data.followers);
  };

  return (
    <div className="w-[380px] h-[460px] rounded-2xl flex flex-col items-center relative bg-blue-gradient p-5 shadow-lg shadow-slate-600">
      <img className="absolute left-5 top-5" src={logo} alt="Logo" />
      <div className="flex flex-col gap-[26px] pt-[158px] pb-4 px-4 w-full h-full bg-picture bg-no-repeat bg-top-2 bg-custom">
        <div className="relative z-10 mx-auto before:content-[''] before:absolute before:-z-10 before:top-1/2 before:left-[-150px] before:transform before:-translate-y-1/2 before:w-[380px] before:h-2 before:shadow-lineShadow before:bg-white">
          <div className="w-20 h-20 rounded-full border-8 border-white bg-[#5735A4]">
            <div className="w-20 h-20 rounded-full shadow-userShadow ml-[-8px] mt-[-8px] p-2">
              <img
                className="w-full h-full rounded-full"
                src={user.avatar}
                alt="Avatar"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-4 items-center">
          <p className="font-medium text-white text-xl leading-6">
            {user.tweets.toLocaleString('en-US')} TWEETS
          </p>
          <p className="font-medium text-white text-xl leading-6">
            {followers.toLocaleString('en-US')} FOLLOWERS
          </p>
        </div>
        <Btn
          isFollowing={isFollowing}
          btnText={isFollowing ? 'FOLLOWING' : 'FOLLOW'}
          action={toggleFollowing}
        />
      </div>
    </div>
  );
};

export default Card;
