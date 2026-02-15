import { useEffect, useState } from "react";
import axios from "axios";

const PokeAPI = () => {
  const [AllUserData, setAllUserData] = useState([]);

  const [num, setNum] = useState(0)

  const getUserData = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    setAllUserData((response.data.results[0].name.first) + " " + (response.data.results[0].name.last));
  };

  useEffect(function(){
    getUserData()
  },[num])
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={()=>{
        setNum(num + 1)
      }}>Count Num</button>
      {AllUserData}
    </div>
  );
};

export default PokeAPI;
