import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar name={["Home", "About", "Contact", "FAQs"]} />
    </>
  );
}

export default App;

// import "./App.css";
// import Navbar from "./Components/Navbar";


// function App() {
//   const isLoggedIn = false;
//   return (
//     <>
//       {isLoggedIn == true ? <Navbar /> : alert("Please Login")}
//     </>
//   );
// }

// export default App;