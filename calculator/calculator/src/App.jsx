import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className="calculator">
      <div className="display">
        {input || '0'}
      </div>

      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === '=' ? handleCalculate() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
