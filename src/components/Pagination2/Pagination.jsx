import React from 'react';
import './pagination.css';

const Pagination = ({
  showingUntil,
  showingFrom,
  totalResults,
  totalPagesNum,
  currentPage,
  onButtonClick,
}) => {
  const paginationPages = [];
  for (let i = 1; i <= totalPagesNum; i++) {
    paginationPages.push(
      <button
        key={i}
        disabled={currentPage === i}
        className={`pagination__page ${
          currentPage === i && "pagination__page--selected"
        }`}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage === i) return;
          onButtonClick(i);
        }}>
        {i}
      </button>
    );
  }

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <button
          disabled={currentPage === 1}
          className={`pagination__prev ${
            currentPage === 1 ? "pagination__button--disabled" : ""
          } `}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage === 1) return;
            onButtonClick(currentPage - 1);
          }}>
          Prev
        </button>
        <div className="pagination__pages">{paginationPages}</div>
        <button
          disabled={currentPage === totalPagesNum}
          className={`pagination__next ${
            currentPage === totalPagesNum ? "pagination__button--disabled" : ""
          } `}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage === totalPagesNum) return;
            onButtonClick(currentPage + 1);
          }}>
          Next
        </button>
      </div>
      <span className="pagination__info">
        {showingFrom} - {showingUntil} of {totalResults} data
      </span>
    </div>
  );
};
export default Pagination;