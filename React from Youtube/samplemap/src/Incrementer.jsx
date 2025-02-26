import { useState } from "react";

function Incrementer() {
  const [val, setVal] = useState(0);
  function handleInc() {
    setVal(() => val + 1);
  }
  function handleDec() {
    // setVal((prev) => prev - 1);
    // setVal((prev) => prev - 1);
    setVal(() => val - 1);
  }
  console.log(val);
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <h1>{val}</h1>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default Incrementer;
