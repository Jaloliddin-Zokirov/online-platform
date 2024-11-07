// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../components/Home/Home";
// import Login from "../components/Login/Login";
// import About from "../components/About/About";
// import Teachers from "../components/Teachers/Teachers";
// import Courses from "../components/Courses/Courses";
// import Lesson from "../components/Lesson/Lesson";
// import Dashboard from "../components/Dashboard/Dashboard";

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
//       {
//         path: "lesson",
//         element: <Lesson />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "login-register",
//         element: <Login />,
//       },
//     ],
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
import Lesson from "../components/Lesson/Lesson";
import Dashboard from "../components/Dashboard/Dashboard";
import Video from "../components/Video/Video";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Context.Provider value={{ fetchUsersDetails }}>
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
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "login-register",
    element: (
      <Context.Provider value={{ fetchUsersDetails }}>
        <Login />
      </Context.Provider>
    ),
  },
]);

export default routes;
