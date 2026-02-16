import axios from "axios";

const App = () => {
  const getData = async () => {
    const response = await axios.get("http://localhost:8000/data");
    console.log(response);
  };

  return (
    <div>
      <h1>App Here!</h1>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
