import React from 'react';

import styles from './styles.module.scss';

function Upload() {
  return (
    <div className={styles.upload}>
      <label htmlFor="upload">Upload Clippings</label>
      <input type="file" name="upload" id="upload" accept=".txt" />
    </div>
  );
}

export default Upload;
