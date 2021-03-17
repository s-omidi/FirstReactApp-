import _ from "lodash";

export const Pagination = (cources, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(cources).slice(startIndex).take(perPage).value();
};
