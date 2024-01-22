import { useMemo, useState } from "react";
import { Child } from "../../common";


const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const memoValue = useMemo(() => ({ value: "child" }), []);

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Child will re-render even if its value is memoized</p>

      <button onClick={onClick}>click here</button>
      <br />
      <br />
      <Child value={memoValue} />
    </>
  );
};

export default Component;
