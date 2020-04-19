import React from "react";

import Book from "./book";
import Empty from "./empty";

import styles from "./styles.module.scss";

function Books({ books, setActiveBook }) {
  return (
    <div className={styles.container}>
      {books.length === 0 ? (
        <Empty />
      ) : (
        books.map((book) => (
          <Book key={book.raw} book={book} setActiveBook={setActiveBook} />
        ))
      )}
    </div>
  );
}

export default Books;
