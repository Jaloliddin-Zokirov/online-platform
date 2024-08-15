import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.up}>
        <div className={styles.upTwo}>
          <Link>Logo</Link>
        </div>
        <div className={styles.downTwo}>
          <Link className={styles.link} to={"/"}>
            <HomeIcon />
            Home
          </Link>
          <Link className={styles.link} to={"teachers"}>
            <PeopleAltIcon />
            Teacher's
          </Link> 
          <Link className={styles.link} to={"courses"}>
            <SchoolIcon />
            Course's
          </Link>
        </div>
      </div>
      <div className={styles.down}>
        <div className={`${styles.account} ${checked ? styles.active : ''}`}>
          <span
            className={styles.ak__name}
            onClick={() => setChecked(!checked)}
          >
            <AccountCircleIcon />
            Account
          </span>
          <ul
            className={`${styles.settings__list} ${
              checked ? styles.settings__check : ""
            }`}
          >
            <li className={styles.settings__item}>
              <Link>Login</Link>
            </li>
            <li className={styles.settings__item}>
              <Link>Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
