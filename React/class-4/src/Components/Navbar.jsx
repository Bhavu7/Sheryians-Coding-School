import React from "react";

const Navbar = () => {
  const links = ["Home", "About", "Contact", "FAQs"];

  return (
    <div className="flex items-center justify-around bg-black p-4 select-none">
      <div className="text-3xl font-bold text-gray-300 cursor-pointer active:scale-95">
        React
      </div>
      <div className="flex items-center justify-center text-gray-400 font-semibold gap-10">
        {links.map(function (link) {
          return (
            <h1 className="active:scale-95 cursor-pointer hover:text-gray-200">
              {link}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
