import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented, selectCount } from './counterSlice';
import './Counter.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="countDisplay">{count}</div>
      <div className="buttons">
        <button onClick={() => dispatch(decremented(10))}>-10</button>
        <button onClick={() => dispatch(decremented(1))}>-</button>
        <button onClick={() => dispatch(incremented(1))}>+</button>
        <button onClick={() => dispatch(incremented(10))}>+10</button>
      </div>
    </div>
  );
}