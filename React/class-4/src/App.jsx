// import "./App.css";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./Components/Navbar";


function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn == true ? <Navbar /> : alert("Please Login")}
    </>
  );
}

export default App;