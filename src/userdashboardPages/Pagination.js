/** @format */

import React from "react";
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='paginate-container'>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" style={{display:'inline-block', paddingLeft:'5px'}}>
            <butoon className="page-link" onClick={() => paginate(number)}>
              {number}
            </butoon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
