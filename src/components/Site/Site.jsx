import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from './Site.module.scss'

const Site = () => {
  return (
    <div className={styles.box}>
      <header className={styles.header}><Navbar /></header>
      <main className={styles.main}>{<Outlet />}</main>
    </div>
  );
};

export default Site;
