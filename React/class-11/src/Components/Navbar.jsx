import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 bg-pink-900 mb-10 text-white">
      <h2>NavBar</h2>
      <input type="text" className="border" />
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/mens">Men's</Link>
        <Link to="/products/womens">Women's</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
