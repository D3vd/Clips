import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import Quote from "./quote";
import Empty from "./empty";

import styles from "./styles.module.scss";

function Clips({ quotes, activeBook }) {
  const [activeQuotes, setActiveQuotes] = useState([]);
  // const [empty, setEmpty] = useState(true);

  useEffect(() => {
    let activeQuotes = quotes.filter((quote) => quote.raw === activeBook);
    setActiveQuotes(activeQuotes);
  }, [activeBook, quotes]);

  return (
    <div className={styles.container}>
      {activeQuotes.length === 0 ? (
        <Empty />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h1>{activeQuotes[0].book}</h1>
          </div>
          <div className={styles.content}>
            <div>
              {activeQuotes.map((quote) => (
                <Quote key={uuid()} quote={quote} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clips;
