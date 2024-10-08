import React from "react";
import styles from "./Teachers.module.scss";
import { Link } from "react-router-dom";

const Teachers = () => {
  return (
    <div className={styles.teachers}>
      <h2 className={styles.title}>
        The Teachers section is under development
      </h2>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default Teachers;
