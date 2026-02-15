import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import NotFound from "./Pages/NotFound";
import Courses from "./Pages/Courses";
import SomeCourses from "./Pages/SomeCourses";
import CourseDetails from "./Pages/CourseDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/products" element={<Products />} />

        {/* Dynamic Route */}
        <Route path="/about/:id" element={<NotFound />} />

        {/* Nested Routes */}
        <Route path="/products/mens" element={<Mens />} />
        <Route path="/products/womens" element={<Womens />} />

        {/* Nested Dynamic Routes */}
        <Route path="/courses/:courseId" element={<SomeCourses />} />
        <Route path="/courses/:courseId/details" element={<CourseDetails />} />

        {/* Not Found Page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
