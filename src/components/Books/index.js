import React from "react";

import Book from "./book";
import Empty from "./empty";

import styles from "./styles.module.scss";

function Books({ books, setActiveBook }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Books ({books.length})</h1>
      </div>
      <div className={styles.content}>
        {books.length === 0 ? (
          <Empty />
        ) : (
          books.map((book) => (
            <Book key={book.raw} book={book} setActiveBook={setActiveBook} />
          ))
        )}
      </div>
    </div>
  );
}

export default Books;
