import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Pagination.scss';

const TablePagination = ({ totalPage, currentPage, onChangePage, className }) => {

  let maxPage = 0;
  let minPage = 0;

  if (currentPage <= 3) {
    maxPage = Math.min(5, totalPage);
    minPage = Math.max(1, maxPage - 4);
  } else {
    maxPage = Math.min(currentPage + 2, totalPage);
    minPage = Math.max(1, currentPage - 2);
  }
  const pageItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    const pageNumber = minPage + item;
    if (pageNumber <= maxPage) {
      return (
        <PaginationItem 
          key={`pageNumber__${pageNumber}`} 
          active={pageNumber === currentPage}
          onClick={(e) => {onChangePage(pageNumber)}}>
          <PaginationLink className={`${pageNumber === currentPage ? 'PageItem__active' : 'PageItem'}`}>
            { pageNumber }
          </PaginationLink>
        </PaginationItem>
      );
    }
  });

  return (
    <div className={`PaginationBox ${className ? className : ''}`}>
      <Pagination aria-label="Page navigation example">
        <PaginationItem 
          disabled={totalPage === 0 || currentPage === 1} 
          onClick={() => {
            onChangePage(Math.max(currentPage - 5, 1));
          }}
        >
          <PaginationLink className={`${totalPage === 0 || currentPage === 1} ? PageItem : ''`} previous/>
        </PaginationItem>
        { pageItem.filter(Boolean) }
        
        <PaginationItem 
          disabled={totalPage === 0 || totalPage <= currentPage}
          onClick={() => { onChangePage(Math.min(totalPage, currentPage + 5)) }}
        >
          <PaginationLink className={`${totalPage === 0 || totalPage <= currentPage} ? PageItem : ''`} next/>
        </PaginationItem>
      </Pagination> 
    </div> 
  );
}

export default TablePagination;