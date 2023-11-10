import { useState } from "react";

function getInitialValue() {
  return 0;
}

export const useCounter = () => {
  const [count, setCount] = useState(() => getInitialValue());

  const increment = () => {
    setCount((currentState) => currentState + 1);
    // setCount((currentState) => currentState + 1)
  };

  return { count, increment };
};
