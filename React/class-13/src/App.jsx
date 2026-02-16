// import axios from "axios";

import { useState } from "react";
import AllSections from "./Components/AllSections";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  // const getData = async () => {
  //   const response = await axios.get("http://localhost:8000/data");
  //   console.log(response);
  // };

  // const courseData = [
  //   {
  //     courseName:"Cohort 2.0",
  //     instructor:"Sarthak",
  //     mentor:"Anubhav",
  //     duration:"6 Months"
  //   }
  // ]

  const [Theme, setTheme] = useState('Light')

  const changeTheme = (setThemeInput) => {
    setTheme(setThemeInput)
  }

  return (
    <div>
      <h1>Navbar Here: Theme is {Theme}</h1>
      <Navbar changeTheme={changeTheme} />
      {/* <AllSections courseData={courseData} /> */}
      <AllSections />
      <Footer />
      {/* <h1>App Here!</h1>
      <button onClick={getData}>Get Data</button> */}
    </div>
  );
};

export default App;
