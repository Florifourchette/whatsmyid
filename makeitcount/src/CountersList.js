import React, { useState } from "react";

let initialCounters = [0, 0, 0, 0];

const CountersList = () => {
  const [counters, setCounters] = useState(initialCounters);

  const increaseCount = (index) => {
    const newCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });

    setCounters(newCounters);
  };

  const decreaseCount = (index) => {
    const newCounters = counters.map((c, i) => {
      if (i === index) {
        return c - 1;
      } else {
        return c;
      }
    });

    setCounters(newCounters);
  };

  const increaseAll = () => {
    const newCounters = counters.map((e) => e + 1);
    setCounters(newCounters);
  };

  const decreaseAll = () => {
    const newCounters = counters.map((e) => e - 1);
    setCounters(newCounters);
  };

  return (
    <>
      <ul>
        {counters.map((count, i) => (
          <li key={i}>
            <button onClick={() => decreaseCount(i)}>Decrease</button>
            {count}
            <button onClick={() => increaseCount(i)}>Increase</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          increaseAll();
        }}
      >
        Increase All
      </button>
      <button onClick={decreaseAll}>Decrease All</button>
    </>
  );
};

export default CountersList;
