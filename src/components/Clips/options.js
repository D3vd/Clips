import React from "react";

import styles from "./styles.module.scss";

function Options() {
  return (
    <div className={styles.options}>
      <div className={styles.cnt}>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider + " " + styles.round}></span>
        </label>
        <div>Location</div>
      </div>
      <div className={styles.cnt}>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider + " " + styles.round}></span>
        </label>
        <div>Date</div>
      </div>
    </div>
  );
}

export default Options;
