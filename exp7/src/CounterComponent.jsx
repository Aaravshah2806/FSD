import React from "react";

function CounterComponent({ name, count, setCount }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Local Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        disabled={count >= 100}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
      >
        Decrement
      </button>

      <p>Progress: {count}/100</p>
      <progress value={count} max="100" />
    </div>
  );
}

export default CounterComponent;