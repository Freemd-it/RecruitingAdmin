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

  // if (totalPage <= 5) {
  //   maxPage = totalPage;
  // } else {
  //   if (currentPage +2 <= totalPage) {
  //     maxPage = currentPage +2; 
  //     if (maxPage - 4 > 0) {
  //       minPage = maxPage - 4; 
  //     }
  //   }
  // }

  const pageItem = [0, 1, 2, 3, 4].map(item => {
    const pageNumber = minPage + item;
    console.log(pageNumber, maxPage);
    if (pageNumber <= maxPage) {
      return (
        <PaginationItem 
          key={`pageNumber__${pageNumber}`} 
          active={pageNumber === currentPage}
          onClick={(e) => {onChangePage(pageNumber)}}
        >
          <PaginationLink>
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
          disabled={totalPage === 0} 
          onClick={() => {
            onChangePage(Math.max(currentPage - 5, 1));
          }}
        >
          <PaginationLink previous/>
        </PaginationItem>
        { pageItem.filter(Boolean) }
        <PaginationItem 
          disabled={totalPage === 0 || totalPage <= currentPage}
          onClick={() => {
            console.log('totalPage', totalPage);
            onChangePage(Math.min(totalPage, currentPage + 5));
          }}
        >
          <PaginationLink next/>
        </PaginationItem>
      </Pagination> 
    </div> 
  );
}

export default TablePagination;