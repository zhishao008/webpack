import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState, memo, useMemo, useCallback, useReducer, useContext } from 'react';

const MemoChild = memo((props) => {
    console.log('MemoChild render');
    return <div>{props.age}</div>
},(prevProps, nextProps) => {
   if(prevProps.age !== nextProps.age) {
    return false;
   }
   return true;
})

let LoginChild = (props, ref) => {
    const inputRef = useRef();
    const romData = Math.random();
    let [name, setName] = useState('lizhi');
    let [age, setAge] = useState(20);

    const [count, dispath] = useReducer((state,action)=> {
        if(action === 'add') {
            return state+1;
        }
        return state;
    }, 0);

    useEffect(() => {
        setTimeout(() => {
            setName('zhishao');
            setAge(30);
          }, 2000)
    }, [])
    // if(romData > 0.5) {
    //     useEffect(() => {
    //         console.log('da le ');
    //     }, []);
    // } else {
    //     useEffect(() => {
    //         console.log('xiao le ');
    //     }, []);
    // }
    // if(romData > 0.5) {
    //     useEffect(() => {
    //         console.log('da le ');
    //     }, []);
    // } else {
    //     useEffect(() => {
    //         console.log('xiao le ');
    //     }, []);
    // }
    // useEffect(() => {
    //     console.log(inputRef.current.value);
    // }, []);
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.value = 23;
        }
    }))

    const MemoUseChild = useMemo(() => {
        console.log('MemoUseChild render');
        return <div>{name}</div>
    }, [name])

    const setasName = useCallback(() => {
        console.log('setasName');
        setName('a xi ba')
    }, [age]);
    return <div>
        <MemoChild name={name} age={age}/>
        {MemoUseChild}
        <input ref={inputRef} value={12}/>
        <div onClick={setasName}>修改名字</div>
        <div>{count}</div>
        <div onClick={() => dispath('add')}>修改count</div>
    </div>
}
LoginChild = forwardRef(LoginChild)
export default LoginChild;