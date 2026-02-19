import React, { useContext } from "react";
import { ThemeContextData } from "../Context/ThemeContext";

const Section2 = () => {
  const data = useContext(ThemeContextData);

  return (
    <div>
      <h1>Section 2</h1>
      <h4>{data}</h4>
    </div>
  );
};

export default Section2;
