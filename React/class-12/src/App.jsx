import {
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Koder from "./Pages/Koder";
import Kodex from "./Pages/Kodex";
import Footer from "./Components/Footer";
// import { Children } from "react";

function App() {
  // const allRoutes = createBrowserRouter(
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/courses",
  //     element: <Courses />,
  //     Children: [
  //       {
  //         path: "koder",
  //         element: <Koder />,
  //       },
  //       {
  //         path: "kodex",
  //         element: <Kodex />,
  //       },
  //     ],
  //   },
  // );
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/koder" element={<Koder />} />
          <Route path="/courses/kodex" element={<Kodex />} />
        </Route>
      </Routes>

      {/* <RouterProvider router={allRoutes} /> */}
      <Footer />
    </div>
  );
}

export default App;
