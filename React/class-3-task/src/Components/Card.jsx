import React from "react";

const Card = () => {
  return (
    <div className="flex justify-evenly items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-5 p-4">
        <div className="bg-white h-120 w-84 p-1.5 shadow-lg rounded-[40px]">
            <img src="cover-image.jpg" alt="Cover Image" className="rounded-[35px]" />
            <div className="p-1.5 text-center">
                <h2 className="text-3xl font-semibold mt-4">John Doe</h2>
                <p className="text-gray-600 mt-2">This is a description of the card. It provides additional information about the content.</p>
            </div>
        </div>
        {/* <div className="bg-white h-64 w-48 shadow-lg rounded-[40px]"></div>
        <div className="bg-white h-64 w-48 shadow-lg rounded-[40px]"></div>
        <div className="bg-white h-64 w-48 shadow-lg rounded-[40px]"></div>
        <div className="bg-white h-64 w-48 shadow-lg rounded-[40px]"></div>
        <div className="bg-white h-64 w-48 shadow-lg rounded-[40px]"></div> */}
      </div>
    </div>
  );
};

export default Card;
