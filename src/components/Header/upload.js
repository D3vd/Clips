import React from "react";

import styles from "./styles.module.scss";

function Upload(props) {
  let fileReader;

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const handleFileRead = () => {
    const content = fileReader.result;
    props.setFile(content);
  };

  return (
    <div className={styles.upload}>
      <label htmlFor="upload">Upload Clippings</label>
      <input
        type="file"
        name="upload"
        id="upload"
        accept=".txt"
        onChange={(e) => {
          handleFileChosen(e.target.files[0]);
        }}
      />
    </div>
  );
}

export default Upload;
