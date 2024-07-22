// 1st solution

// import React, { useEffect, useRef, useState } from 'react'

// const Timer = () => {

//     const [count,setCount] = useState(0);
//     const [isRunning,setIsRunning] = useState("");
//     const intervalRef = useRef();

//     useEffect(() => {
//         if(isRunning === "start"){
//             intervalRef.current = setInterval(() => {
//                 setCount((prevCount) => prevCount +1)
//             },1000)
//         }else if(isRunning === "stop"){
//             setCount(0);
//             clearInterval(intervalRef.current);
//         }else if(isRunning === "pause"){
//             clearInterval(intervalRef.current);
//         }

//     },[isRunning])

//   return (
//     <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setIsRunning("start")}>Start</button>
//         <button onClick={() => setIsRunning("pause")}>Pause</button>
//         <button onClick={() => setIsRunning("stop")}>Stop</button>
//     </div>
//   )
// }

// export default Timer

// 2nd and optimise one --rem(need to store interval in ref)

import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState("");
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setCount(0);
    clearInterval(intervalRef.current);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => pauseTimer()}>Pause</button>
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  );
};

export default Timer;