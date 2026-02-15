import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/mens" element={<Mens />} />
        <Route path="/products/womens" element={<Womens />} />
      </Routes>
    </div>
  );
};

export default App;
