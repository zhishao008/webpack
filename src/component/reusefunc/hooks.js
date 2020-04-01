/**
 * https://blog.csdn.net/qq_40962320/article/details/87043581
 * hooks  三个主要钩子：useState，useEffect，useContext。
 * 和七个附加钩子：useReducer，useCallback，useMemo，useRef，useImperativeMethods，useMutationEffect，useLayoutEffect。
 */

import React from 'react';
const { useState, useEffect } = React;
export const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}