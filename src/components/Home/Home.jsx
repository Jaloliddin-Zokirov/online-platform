import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tenetur
          beatae necessitatibus natus officiis sed, perferendis accusamus! Ex,
          soluta accusantium!
        </p>
        
      </div>
      <img src="https://picsum.photos/400" width={400} height={400} alt="" />
    </div>
  );
};

export default Home;
