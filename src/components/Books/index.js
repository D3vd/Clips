import React from "react";

import Book from "./book";

import styles from "./styles.module.scss";

function Books({ books, setActiveBook }) {
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <Book key={book.raw} book={book} setActiveBook={setActiveBook} />
      ))}
    </div>
  );
}

export default Books;
