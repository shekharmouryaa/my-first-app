
// ------------------- useRef Hook ------------------- 

import React, { useRef, useEffect } from 'react';

function ExampleForUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value ="Shekhar";
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default ExampleForUseRef;

// ------------------- useContext Hook -------------------

import React, { useContext } from 'react';



const ThemeColor = React.createContext('Red');

function ThemeComp() {

  const theme = useContext(ThemeColor);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeComp;


// ------------------- useCallBack Hook ------------------- 

import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <Calculation value={count} />
    </div>
  );
}

export default Counter;


// ------------------- useMemo Hook ------------------- 

import React, { useMemo } from 'react';

function Calculation({ value }) {

  const result = useMemo(() => {
    return value % 4 === 0 ? value * 2 : value;
  }, [value]);

  return (
    <div>
      <p>Result of Calculation: {result}</p>
    </div>
  );
}

export default Calculation;  
