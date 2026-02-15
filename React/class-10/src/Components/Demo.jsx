import { useEffect, useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [InputValue, setInputValue] = useState("");

  const [Number1, setNumber1] = useState(0);
  const [Number2, setNumber2] = useState(0);
  const [Number3, setNumber3] = useState(0);

  useEffect(() => {
    console.log("Called!!!");
  }, [Number1]);

  // use effect is used when you want to side load some activity
  useEffect(() => {
    console.log("useEffect is Running");
  }, [count]); // [count] -> agar me dependency banata hoon to bas usi ke liye hi useEffect chalega(jab bhi count change hoga, function chalega)
  // agar dependency empty hai to useEffect nahi chalega kisi bhi chiz ke liye

  return (
    <div>
      <input
        type="text"
        value={InputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>

      <h1>{Number1}</h1>
      <button
        onClick={() => {
          setNumber1(Math.floor(Math.random() * 100));
        }}
      >
        Change Number 1
      </button>
      <h1>{Number2}</h1>
      <button
        onClick={() => {
          setNumber2(Math.floor(Math.random() * 100));
        }}
      >
        Change Number 1
      </button>
      <h1>{Number3}</h1>
      <button
        onClick={() => {
          setNumber3(Math.floor(Math.random() * 100));
        }}
      >
        Change Number 3
      </button>
    </div>
  );
};

export default Demo;
