import "./App.css";
import axios from 'axios'

function App() {
  async function getData() {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response.data[0]);

    // Destructuring
    const {data} = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(data);
  }

  return (
    <>
      <h1>App Here!</h1>
      <button onClick={getData}>Get Data</button>
    </>
  );
}

export default App;
