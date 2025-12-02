import React, { useCallback, useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";

const Counters = () => {
  console.log("Counters");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

    const handleClick = useCallback(() => { }, [])
    
  return (
    <div>
      <div>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
        <Count value={count1} name="count 1" handleClick={handleClick} />
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
        <Count value={count2} name="count 2" />
        <button onClick={() => setCount2(count2 + 1)}>+</button>
      </div>
      <IsFive value={count2} />
    </div>
  );
};

export default Counters;
