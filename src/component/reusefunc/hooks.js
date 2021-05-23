/**
 * https://blog.csdn.net/qq_40962320/article/details/87043581
 * hooks  三个主要钩子：useState，useEffect，useContext。
 * 和七个附加钩子：useReducer，useCallback，useMemo，useRef，useImperativeMethods，useMutationEffect，useLayoutEffect。
 */

import React, { useRef } from 'react';
const { useState, useEffect } = React;
export const Counter = (props) => {
  // setCount 初始化  count的值  useStte 可以是 值 也可以是一个有返回的回调
  const p = useRef("123da");
  const [count, setCount] = useState(()=>{
    return 1;
  });
  // useEffect 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log(count);
    console.log(p);
    console.log(props.aa);
    console.log(props);
    return ()=>{
      console.log('组件卸载')
    }
  }, [props.aa, count]);   // 第二个参数为空数组的时候，相当于 componentDidMount
  useEffect(() => {
    console.log("zhixing yici");
    setCount(10);
    return ()=>{
      console.log('组件卸载')
    }
  }, []);   // 第二个参数为空数组的时候，相当于 componentDidMount
  return (
    <div>
      <h1>hooks</h1>
      <h1>{props.aa}</h1>
      <h1>{props.children}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}