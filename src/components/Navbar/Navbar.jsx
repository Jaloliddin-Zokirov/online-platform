import React from "react";
import styles from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import { setUserDetails } from "../../store/userSlice";
import { message } from "antd";

const Navbar = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      message.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }
    if (data.error) {
      message.error(data.message);
    }
  };

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
        {user !== null ? (
          <>
            <div className={styles.ak__name}>
              {user?.profilePic ? (
                <img
                  src={user?.profilePic}
                  className="w-10 h-10 rounded-full"
                  alt={user?.name}
                />
              ) : (
                <AccountCircleIcon />
              )}
              {user?.name}
            </div>
            <div className={styles.menuDisplay}>
              <Link className={styles.text} to={"dashboard"}>
                Dashboard
              </Link>
              <span className={styles.text} onClick={() => handleLogout()}>
                Logout
              </span>
            </div>
          </>
        ) : (
          <Link to={"login-register"} className={styles.ak__name}>
            <AccountCircleIcon />
            Account
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
