import React, { useMemo } from "react";

const IsFive = ({ value }) => {
  console.log("IsFive");

  const result = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return value === 5 ? "Is five" : "Is not five";
  }, [value])

  return <div>{result}</div>;
};

export default React.memo(IsFive, (prevProps, nextProps) => { 
    // false - оновлюється
    return !(nextProps.value === 5 || prevProps.value === 5)
});
