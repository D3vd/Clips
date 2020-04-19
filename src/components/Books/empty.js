import React from "react";

import styles from "./styles.module.scss";

function Empty() {
  return (
    <div className={styles.empty}>
      <img src={require("../../images/books-empty.png")} alt="" />
      <h3>Upload Clippings to Get Started</h3>
    </div>
  );
}

export default Empty;
