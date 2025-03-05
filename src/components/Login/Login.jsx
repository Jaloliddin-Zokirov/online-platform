import React, { useContext, useState } from "react";
import styles from "./Login.module.scss";
import SummaryApi from "../../common";
import { useNavigate } from "react-router-dom";
import Context from "../../Context";
import imageTobase64 from "../../helpers/imageTobase64";
import { message } from "antd";

const Login = () => {
  const [bgPushed, setBgPushed] = useState(true);
  const [forgot, setForgot] = useState(false);
  // const [next, setNext] = useState(false);
  // const [next2, setNext2] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const [dataSignIn, setDataSignIn] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { fetchUsersDetails } = useContext(Context);

  //   Sign Up
  const handleOnChangeSignUp = (evt) => {
    const { name, value } = evt.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmitSignUp = async (evt) => {
    evt.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataRespnse = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataRespnse.json();

      if (dataApi.success) {
        message.success(dataApi.message);
        setBgPushed(true);
      }

      if (dataApi.error) {
        message.error(dataApi.message);
      }
    } else {
      message.warning("Please check password and confirm password");
    }
  };

  //   Sign In
  const handleOnChangeSignIn = (evt) => {
    const { name, value } = evt.target;

    setDataSignIn((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmitSignIn = async (evt) => {
    evt.preventDefault();

    const dataRespnse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataSignIn),
    });

    const dataApi = await dataRespnse.json();

    if (dataApi.success) {
      fetchUsersDetails();
      message.success(dataApi.message);
      navigate("/");
    }
    if (dataApi.error) {
      console.log(dataApi.message);

      message.error(dataApi.message);
    }
  };

  const handleUploadePic = async (evt) => {
    const file = evt.target.files[0];

    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  return (
    <div className={styles.login__register}>
      <div className={`${styles.box} ${forgot ? styles.forgotTrue : ""}`}>
        <div className={styles.login}>
          <div className={styles.content}>
            <button
              className={styles.logReg__btn}
              onClick={() => setBgPushed(true)}
            >
              LOGIN
            </button>
            <span className={styles.info}>I have an account</span>
          </div>
        </div>
        <div
          className={`${styles.bg__color} ${
            bgPushed ? styles.onLogin : styles.onRegister
          }`}
        >
          {bgPushed ? (
            <form className={styles.form} onSubmit={handleSubmitSignIn}>
              <h3 className={styles.title}>Login</h3>
              <div className={styles.inp__box}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  name="email"
                  value={dataSignIn.email}
                  onChange={handleOnChangeSignIn}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={dataSignIn.password}
                  onChange={handleOnChangeSignIn}
                />
                <span className={styles.forgot} onClick={() => setForgot(true)}>
                  Forgot password ?
                </span>
              </div>
              <button>Login</button>
            </form>
          ) : (
            <div className="relative">
              <form>
                <label>
                  <div className="absolute top-0 w-full text-xs bg-slate-200 py-4 text-center bg-opacity-80 pb-4 pt-2 cursor-pointer">
                    Upload Photo
                  </div>
                  <input
                    className="hidden"
                    type="file"
                    onChange={handleUploadePic}
                  />
                </label>
              </form>
              <form className={styles.form} onSubmit={handleSubmitSignUp}>
                <h3 className={styles.title}>Register</h3>
                <div className={styles.inp__box}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    name="name"
                    value={data.name}
                    onChange={handleOnChangeSignUp}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={data.email}
                    onChange={handleOnChangeSignUp}
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    name="password"
                    value={data.password}
                    onChange={handleOnChangeSignUp}
                  />
                  <input
                    type="password"
                    placeholder="Enter confirm password"
                    required
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleOnChangeSignUp}
                  />
                </div>
                <button>Register</button>
              </form>
            </div>
          )}

          {/* <form className={styles.form}>
            <h3 className={styles.title}>Forgot password</h3>
            {forgot ? (
              <>
                {next ? (
                  <>
                    {next2 ? (
                      <>
                        <label className={styles.forgot__label}>
                          Enter a new password here:
                          <input
                            type="password"
                            placeholder="Enter a new password"
                          />
                          <input
                            type="password"
                            placeholder="Enter confirmation password"
                          />
                        </label>
                        <button type="button" onClick={() => setForgot(false)}>
                          Change
                        </button>
                      </>
                    ) : (
                      <>
                        <label className={styles.forgot__label}>
                          A verification code has been sent to your email, enter
                          it here:
                          <input
                            type="text"
                            placeholder="Enter confirmation code"
                          />
                        </label>
                        <button type="button" onClick={() => setNext2(true)}>
                          Next
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <label className={styles.forgot__label}>
                      A code will be sent to your email
                      <input type="email" placeholder="Enter your email" />
                    </label>
                    <button type="button" onClick={() => setNext(true)}>
                      Next
                    </button>
                  </>
                )}
              </>
            ) : bgPushed ? (
              <div className={styles.inp__box}>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <span className={styles.forgot} onClick={() => setForgot(true)}>
                  Forgot password ?
                </span>
              </div>
            ) : (
              <div className={styles.inp__box}>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <input
                  type="password"
                  placeholder="Enter your confirm password"
                />
              </div>
            )}
            {forgot ? (
              <></>
            ) : (
              <button
                onClick={(evt) => {
                  evt.target.textContent === "Register"
                    ? handleSubmitSignUp()
                    : handleSubmitSignIn();
                }}
              >
                {bgPushed ? "Login" : "Register"}
              </button>
            )}
          </form> */}
        </div>
        <div className={styles.register}>
          <div className={styles.content}>
            <button
              className={styles.logReg__btn}
              onClick={() => setBgPushed(false)}
            >
              REGISTER
            </button>
            <span className={styles.info}>I don't have an account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
