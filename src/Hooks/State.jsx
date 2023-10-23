import { useState } from "react"; 

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevState => prevState + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default State;
