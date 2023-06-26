import { getInitialIdsList } from '../services/fetchAPI';

export const getInitialFollowIdList = async setFollowIdList => {
  const initialUsersIds = await getInitialIdsList();
  localStorage.setItem('followIdList', JSON.stringify(initialUsersIds));
  await setFollowIdList(initialUsersIds);
};
