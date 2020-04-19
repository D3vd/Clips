import React from "react";

import styles from "./styles.module.scss";

function Book({ book, setActiveBook }) {
  return (
    <div className={styles.book} onClick={() => setActiveBook(book.raw)}>
      <h1>{book.name}</h1>
    </div>
  );
}

export default Book;
