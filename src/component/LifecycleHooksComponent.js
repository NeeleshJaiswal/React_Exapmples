import React, { useEffect, useState } from "react";

export const LifecycleHooksComponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
       console.log("***useEffect***");
    },[count, count2]); 
    
 const changeStateHandler = () => {
    console.log("***changeStateHandler***");
    setCount(count+1);
  };
  const changeStateHandler2 = () => {
    console.log("***changeStateHandler22222***");
    setCount2(count2+1);
  };
  return (
    <div>
      <h3>{count}</h3>
      {count == 4 && alert(count)}
      <br />
      <button onClick={changeStateHandler}>Change Count</button>
      <h3>{count2}</h3>
      <button onClick={changeStateHandler2}>Change Count2</button>
    </div>
  );
};
