import React from 'react';

import Upload from './upload';

import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={require('../../images/logo.svg')} alt="Logo" />
        <h1>Clips</h1>
      </div>
      <Upload />
    </div>
  );
}

export default Header;
