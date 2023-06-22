import axios from 'axios';

axios.defaults.baseURL = 'https://64937ff00da866a95366783f.mockapi.io/api';

const getAllUsers = async ({ page = 1 }) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
