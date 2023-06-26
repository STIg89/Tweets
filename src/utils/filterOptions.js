import { getAllUsers, getFilteredUsers } from '../services/fetchAPI';
import { frondEndPagination } from './frontEndPagination';

export const getAll = async ({ reqPage, setUsers, setPage }) => {
  const fetchedUsers = await getAllUsers(reqPage);
  setUsers(prev => [...prev, ...fetchedUsers]);
  setPage(reqPage);
};

export const getFiltered = async data => {
  const { setUsers, reqPage, setPage } = data;

  const paginatedList = frondEndPagination(data);

  const fetchedUsers = await getFilteredUsers(paginatedList);
  setUsers(prev => [...prev, ...fetchedUsers]);
  setPage(reqPage);
};
