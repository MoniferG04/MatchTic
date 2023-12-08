import React, { useState } from 'react';
import { PathsDashboard } from '../Paths';
import { NavBar } from '../Components/Menu';
import styles from "../Styles/Dashboard.module.css";

export function Dashboard() {

  return (
    <div className={styles.dashboard}>
      <header className={styles.menu}>
        <NavBar />
      </header>
      <body className={styles.rutas}>
        <PathsDashboard />
      </body>
    </div>
  );
};
