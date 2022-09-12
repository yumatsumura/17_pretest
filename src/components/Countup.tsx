import React, { useState, useEffect } from 'react';

const Countup = (props:any)=> {
  const [timer, setTimer] = useState(true);
  const [count, setcount] = useState(props.prescore);
  const CountupAnim = () => {
    setcount((count:number) => count + 1);
  }

  useEffect(() => {
    if (timer) {
      const timerId = setInterval(CountupAnim, 10);
      return () => clearInterval(timerId);
    }
  }, [timer]);

  if (props.prescore === props.score){
    return (
      <>
        {props.score}
      </>
    )
  } else {
    return (
      <>
        {count}
      </>
    )
  }
  
}

export default Countup;