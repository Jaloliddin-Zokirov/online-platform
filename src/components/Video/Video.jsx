import React from "react";
import styles from "./Video.module.scss";

const Video = ({ content }) => {
  return (
    <div className={styles.video}>
      <img
        src="https://picsum.photos/550/350"
        width={550}
        height={350}
        alt=""
      />
      <div className={styles.content}>
        <h2>{content}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
          voluptates sit, harum libero accusantium, facere repellat omnis
          tempore, commodi eligendi dolorem quae eveniet adipisci praesentium et
          sed quibusdam itaque. Vitae quasi ducimus eveniet inventore deleniti
          voluptatem sequi sunt. Nobis, officia adipisci. Nihil aspernatur esse
          voluptatum eaque obcaecati, aliquam quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
          voluptates sit, harum libero accusantium, facere repellat omnis
          tempore, commodi eligendi dolorem quae eveniet adipisci praesentium et
          sed quibusdam itaque. Vitae quasi ducimus eveniet inventore deleniti
          voluptatem sequi sunt. Nobis, officia adipisci. Nihil aspernatur esse
          voluptatum eaque obcaecati, aliquam quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
          voluptates sit, harum libero accusantium, facere repellat omnis
          tempore, commodi eligendi dolorem quae eveniet adipisci praesentium et
          sed quibusdam itaque. Vitae quasi ducimus eveniet inventore deleniti
          voluptatem sequi sunt. Nobis, officia adipisci. Nihil aspernatur esse
          voluptatum eaque obcaecati, aliquam quia.
        </p>
      </div>
    </div>
  );
};

export default Video;
