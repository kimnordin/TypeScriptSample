import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented, selectCount } from './counterSlice';
import './Counter.css';

export function Counter() {
  const [inputValue, setInputValue] = useState<string>("");
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddInputValue = () => {
    const numericalInput = parseFloat(inputValue);
    if (!isNaN(numericalInput)) {
      dispatch(incremented(numericalInput));
      setInputValue("");
    }
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="countDisplay">{count}</div>
      <div className="buttonsWrapper">
        <button className="counterButton" onClick={() => dispatch(decremented(10))}>-10</button>
        <button className="counterButton" onClick={() => dispatch(decremented(1))}>-</button>
        <button className="counterButton" onClick={() => dispatch(incremented(1))}>+</button>
        <button className="counterButton" onClick={() => dispatch(incremented(10))}>+10</button>
      </div>
      <div className="inputWrapper">
        <input
          type="number"
          placeholder="Enter a Value"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="counterButton" onClick={handleAddInputValue}>Add Input Value</button>
      </div>
    </div>
  );
}