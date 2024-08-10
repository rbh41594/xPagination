import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <div className={styles.pageNumber}>
        <span>{currentPage}</span>
      </div>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
