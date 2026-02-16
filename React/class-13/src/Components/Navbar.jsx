import { useState } from "react";
const Navbar = (props) => {
  const [ThemeInput, setThemeInput] = useState("");
//   console.log(props);
  
  return (
    <div className="nav">
      

      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(ThemeInput)
          setThemeInput("");
        }}
      >
        <input
          type="text"
          placeholder="Enter Theme"
          value={ThemeInput}
          onChange={(e) => {
            setThemeInput(e.target.value);
          }}
        />
        <button>Submit Theme</button>
      </form>
    </div>
  );
};

export default Navbar;
