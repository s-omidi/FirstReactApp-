import { range } from "lodash";

const Paginate = ({ totalCource, currentPage, perPage, handlePageChange }) => {
  const pageCount = Math.ceil(totalCource / perPage);
  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);
  return (
    <ul className="pagination justify-content-center">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a
            className="page-link"
            style={{ cursor: "pointer" }}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
