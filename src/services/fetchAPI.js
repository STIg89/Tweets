import axios from 'axios';

axios.defaults.baseURL = 'https://64937ff00da866a95366783f.mockapi.io/api';

export const getAllUsers = async page => {
  console.log('page:', page);
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const patchUserFollowers = async (id, newQuantity) => {
  const quantity = { followers: newQuantity };
  try {
    const { data } = await axios.put(`/users/${id}`, quantity);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFollowingUsers = async paginatedList => {
  try {
    const promises = paginatedList.map(async id => {
      const { data } = await axios.put(`/users/${id}`);
      return data;
    });

    const data = await Promise.all(promises);
    return data;
  } catch (error) {
    console.log(error);
  }
};
