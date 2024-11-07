import React from "react";
import styles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Dashboard = () => {
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>
        {user?.profilePic ? (
          <img
            src={user?.profilePic}
            className="w-20 h-20 mx-auto rounded-full"
            alt={user?.name}
          />
        ) : (
          <AccountCircleIcon />
        )}
        <span>{user?.name ? user?.name : "Accaunt"}</span>
      </h2>
      <p>The Dashboard section is under development</p>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default Dashboard;
