import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1 className="text-5xl underline text-blue-500 font-extrabold absolute top-1/2 left-1/2 -translate-1/2">
        Products Page Here!
      </h1>
      <div className="flex gap-5 p-10 text-blue-900 font-bold underline">
        <Link to="/products/mens">Men's</Link>
        <Link to="/products/womens">Women's</Link>
      </div>
    </div>
  );
};

export default Products;
