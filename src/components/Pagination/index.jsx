import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = ({ onChangePage, pageSize }) => {
  const handelOnChangePage = (page) => {
    onChangePage(page);
  };
  const renderPageNumber = () => {
    console.log(pageSize);
    for (let i = 1; i <= pageSize; i++) {
      return (
        <PaginationItem>
          <PaginationLink>{i}</PaginationLink>
        </PaginationItem>
      );
    }
  };
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink first onClick={() => handelOnChangePage(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {renderPageNumber()}
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
