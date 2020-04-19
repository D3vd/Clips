import React from "react";

import styles from "./styles.module.scss";

function Quote({ quote }) {
  return (
    <div className={styles.quote}>
      <h2>{quote.quote}</h2>
      <hr />
    </div>
  );
}

export default Quote;
