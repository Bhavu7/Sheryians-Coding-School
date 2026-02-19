import React, { useContext } from "react";
import { ThemeContextData } from "../Context/ThemeContext";

const Footer = () => {
  const [Theme, setTheme] = useContext(ThemeContextData);
  return (
    <div className="footer">
      <h1>Footer Here</h1>
      <h4>{Theme}</h4>
      <button onClick={()=>{
        if(Theme == 'Light'){
          setTheme("Dark")
        } else {
          setTheme("Light")
        }
      }}>Change Theme</button>
    </div>
  );
};

export default Footer;
