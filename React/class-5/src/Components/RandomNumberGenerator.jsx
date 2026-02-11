import { useState } from "react";

const RandomNumberGenerator = () => {
  const [num, setnum] = useState(0);

  return (
    <div className="container">
      <div className="box">
        <div className="num">{num}</div>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            let random = Math.floor(Math.random() * 100);
            setnum(random);
          }}
        >
          Generate Random Number
        </button>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
