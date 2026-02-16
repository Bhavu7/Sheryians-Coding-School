import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <h1 className="text-7xl underline font-bold">Courses Page Here</h1>
      <Outlet />
    </div>
  );
};

export default Courses;
