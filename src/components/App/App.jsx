import { Route, Routes } from "react-router-dom";
import Site from "../Site/Site";
import Home from "../Home/Home";
import About from "../About/About";
import Teachers from "../Teachers/Teachers";
import Courses from "../Courses/Courses";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Site />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  );
};

export default App;
