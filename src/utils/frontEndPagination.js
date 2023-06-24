export const frondEndPagination = ({
  reqPage,
  selectedFilter,
  followingIdList,
  followIdList,
}) => {
  const pageSize = 3;
  const startIndex = (reqPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedList = (
    selectedFilter === 'followings' ? followingIdList : followIdList
  ).slice(startIndex, endIndex);

  return paginatedList;
};
