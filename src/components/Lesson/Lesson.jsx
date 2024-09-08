import React from "react";
import styles from "./Lesson.module.scss";
import { Link } from "react-router-dom";

const Lesson = () => {
  return (
    <div className={styles.lesson}>
      <h2 className={styles.title}>The Lesson section is under development</h2>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default Lesson;
