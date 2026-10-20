import React, { useState, useEffect } from "react";
import CounterComponent from "./CounterComponent";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const globalCount = count1 + count2;

  useEffect(() => {
    document.title = `Total: ${globalCount}`;
  }, [globalCount]);

  return (
    <div>
      <h1>Global Count: {globalCount}</h1>

      <CounterComponent
        name="Counter 1"
        count={count1}
        setCount={setCount1}
      />

      <CounterComponent
        name="Counter 2"
        count={count2}
        setCount={setCount2}
      />
    </div>
  );
}

export default App;