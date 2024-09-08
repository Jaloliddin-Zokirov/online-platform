import React, { useState } from "react";
import styles from "./Courses.module.scss";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  
  return (
    <section className={styles.courses}>
      <h2 className={styles.title}>Courses</h2>
      <div className={styles.list}>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Beginner</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Elementary</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Pre Intermediate</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Intermediate</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Upper Intermediate</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Advanced</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
        <Link className={styles.item} to={"/lesson"}>
          <img
            src="https://picsum.photos/350/250"
            width={350}
            height={250}
            alt=""
          />
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Proficient</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              odit consectetur rem ratione sequi dignissimos eius veritatis
              neque, minima odio, quidem quisquam molestias illo ducimus.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
