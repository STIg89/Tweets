import axios from 'axios';

axios.defaults.baseURL = 'https://64937ff00da866a95366783f.mockapi.io/api';

const getAllUsers = async page => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const patchUser = async (id, data) => {
  try {
    const { data } = await axios.patch(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
