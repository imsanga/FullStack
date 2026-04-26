import { useState } from "react";

export const useCount = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const incrementCounter = () => {
    setCount((initialCount) => initialCount + 1);
  };
  const decrementCounter = () => {
    setCount((initialCount) => initialCount - 1);
  };
  const restart = () => setCount(0);

  return [count, incrementCounter, decrementCounter, restart];
};
