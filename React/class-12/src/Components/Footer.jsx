import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const exploreCourse = useNavigate();
  return (
    <div className="m-10 flex items-center justify-center">
      <button
        onClick={() => {
          exploreCourse("/courses");
        }}
        className="p-3 rounded bg-gray-300 cursor-pointer"
      >
        Explore Courses
      </button>
    </div>
  );
};

export default Footer;
