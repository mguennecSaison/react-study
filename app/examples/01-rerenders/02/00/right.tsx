import { useState } from "react";
import { ChildMemo } from "../../common";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Re-render should not happen since the child is memoized</p>
      <button onClick={onClick}>click here {state}</button>

      <ChildMemo />
    </>
  );
};

export default Component;
