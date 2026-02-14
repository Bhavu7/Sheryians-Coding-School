import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./Components/UserCard";

function App() {
  const [allData, setAllData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setAllData(response.data);

    // Destructuring
    // const { data } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users",
    // );
    // console.log(data);
  };

  useEffect(function () {
    getData();
  }, []); // [] -> dependency

  return (
    <div className="app">
      <h1 className="title">Understanding Axios!</h1>
      {/* <button className="btn" onClick={getData}>
        Get Data
      </button> */}

      <div className="card-container">
        {allData.map((elem, index) => {
          return (
            <div key={index}>
              <UserCard elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
