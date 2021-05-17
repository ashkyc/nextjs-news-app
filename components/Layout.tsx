import React from 'react';
import Nav from './Nav';
import Meta from './Meta';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles['container']}>
        <main className={styles['main']}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
