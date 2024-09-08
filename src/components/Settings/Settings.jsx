import React from "react";
import styles from "./Settings.module.scss";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <h2 className={styles.title}>
        The Settings section is under development
      </h2>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default Settings;
