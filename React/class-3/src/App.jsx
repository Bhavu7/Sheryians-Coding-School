import "./App.css";
import Card from "./Components/Card";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="h-screen bg-black items-center justify-center">
      {/* Two ways to render card */}

      {/* render as a function */}
      {/* {Card(10,20)} */}
      {/* render as a component */}
      <Card user='Bhavesh' age={21}/>
      <Card user='Harsh' age={21}/>
      <Card user='Dev' age={21}/>
      <Card user='Bhavu' age={21}/>
      {/* {<Card />} */}
      
      {/* <Cards cardName="Bhavesh" />
      <Cards cardName="Bhavu" /> */}
      {/* {Cards('Bhavesh')}
      {Cards('Bhavu')} */}
    </div>
  );
}

export default App;
