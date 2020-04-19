import React from "react";

import styles from "./styles.module.scss";

function Quote({ quote, location, date }) {
  return (
    <div className={styles.quote}>
      <h2>{quote.quote}</h2>
      <div className={styles.location}>
        {date ? <h4>{quote.time}</h4> : ""}
        {location ? <h4>Location: {quote.location}</h4> : ""}
      </div>
      <hr />
    </div>
  );
}

export default Quote;
