import React, { useState } from 'react';
import { useCounter } from './useCounter';


function ExampleComponentWithHook() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}> Decrement</button>
    </div>
  );
}

export default ExampleComponentWithHook;
