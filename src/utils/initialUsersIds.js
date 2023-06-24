import { getInitialIdsList } from '../services/fetchAPI';

export const getInitialFollowIdList = async () => {
  const initialUsersIds = await getInitialIdsList();
  localStorage.setItem('followIdList', JSON.stringify(initialUsersIds));
};
