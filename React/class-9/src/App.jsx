import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [allData, setAllData] = useState([]);
  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setAllData(response.data);

    // Destructuring
    // const { data } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users",
    // );
    // console.log(data);
  }

  return (
    <div className="app">
      <h1 className="title">Understanding Axios!</h1>
      <button className="btn" onClick={getData}>
        Get Data
      </button>

      <div className="card-container">
        {allData.map((elem, index) => {
          return (
            <div className="card" key={index}>
              <h2 className="card-id">User ID: {elem.id}</h2>
              <p>
                <span>Name:</span> {elem.name}
              </p>
              <p>
                <span>Username:</span> {elem.username}
              </p>
              <p>
                <span>Email:</span> {elem.email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
