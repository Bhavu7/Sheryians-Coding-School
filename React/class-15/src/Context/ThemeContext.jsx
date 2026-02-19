import { createContext, useState } from "react";

export const ThemeContextData = createContext();

const ThemeContext = (props) => {

    const [Theme, setTheme] = useState('Light')

  return (
    <div>
      <ThemeContextData.Provider value={[Theme, setTheme]}>
        <h1>{props.children}</h1>
      </ThemeContextData.Provider>
    </div>
  );
};

export default ThemeContext;
