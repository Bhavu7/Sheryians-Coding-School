import { useContext } from "react";
import { ThemeContextData } from "../Context/ThemeContext";

const Navbar = () => {
  const [Theme, setTheme] = useContext(ThemeContextData);
  return (
    <div className="nav">
      <h1>Navbar Here</h1>
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

export default Navbar;
