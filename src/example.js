import React, {useCallback, useState} from 'react';
import {ButtonCraft} from "./button.js";

export function Example() {
  const [count, setCount] = useState({value: 0});

  const incrementItem = useCallback(
    () => setCount((state) => ({...state, value: state.value + 1})),
    []
  );

  const decreaseItem = useCallback(
    () => setCount((state) => ({...state, value: state.value - 1})),
    []
  );

  return (
    <div>
      <p>Number: {count.value}</p>
      <ButtonCraft className='some-class' action={incrementItem}>
        Increment
      </ButtonCraft>
      <ButtonCraft className='some-class' action={decreaseItem}>
        Decrease
      </ButtonCraft>
    </div>
  );
}