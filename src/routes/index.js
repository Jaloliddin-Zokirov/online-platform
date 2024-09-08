// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../components/Home/Home";
// import Login from "../components/Login/Login";
// import About from "../components/About/About";
// import Teachers from "../components/Teachers/Teachers";
// import Courses from "../components/Courses/Courses";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "teachers",
//         element: <Teachers />,
//       },
//       {
//         path: "courses",
//         element: <Courses />,
//       },
//     ],
//   },
//   {
//     path: "login-register",
//     element: <Login />,
//   },
// ]);

// export default routes;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import About from "../components/About/About";
import Teachers from "../components/Teachers/Teachers";
import Courses from "../components/Courses/Courses";
import Context from "../Context"; // Import context
import { fetchUsersDetails } from "../App";
import { ToastContainer } from "react-toastify";
import Settings from "../components/Settings/Settings";
import Lesson from "../components/Lesson/Lesson";
// You may need to refactor this to ensure it's accessible

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Context.Provider value={{ fetchUsersDetails }}>
        <ToastContainer />
        <App />
      </Context.Provider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "lesson",
        element: <Lesson />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "login-register",
    element: (
      <Context.Provider value={{ fetchUsersDetails }}>
        <ToastContainer />
        <Login />
      </Context.Provider>
    ),
  },
]);

export default routes;
