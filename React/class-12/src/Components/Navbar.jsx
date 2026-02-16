import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-10 flex gap-10">
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        About
      </NavLink>
      <NavLink
        to="/courses"
        style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
      >
        Courses
      </NavLink>
      {/* <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Courses
      </NavLink> */}
    </div>
  );
};

export default Navbar;
