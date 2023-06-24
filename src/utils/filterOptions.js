import { useState } from 'react';
import { getAllUsers, getFollowingUsers } from '../services/fetchAPI';

export const getAll = async ({ page, setUsers, setCurrentPage }) => {
  const fetchedUsers = await getAllUsers(page);
  setUsers(prev => [...prev, ...fetchedUsers]);
  setCurrentPage(page);
};

export const getFollowing = async ({
  page,
  setUsers,
  setCurrentPage,
  followingIdList,
}) => {
  const pageSize = 3;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedList = followingIdList.slice(startIndex, endIndex);
  const fetchedUsers = await getFollowingUsers(paginatedList);
  setUsers(prev => [...prev, ...fetchedUsers]);
  setCurrentPage(page);
};
