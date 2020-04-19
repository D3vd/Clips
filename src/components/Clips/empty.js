import React from "react";

import styles from "./styles.module.scss";

function Empty() {
  return (
    <div className={styles.empty}>
      <img src={require("../../images/clips-empty.png")} alt="" />
      <h3>Select a Book to Display Clips</h3>
    </div>
  );
}

export default Empty;
