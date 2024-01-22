import { useState } from "react";
import { VerySlowComponent } from "../common";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <>
      <button onClick={onClick}>click here</button>
      <VerySlowComponent />
    </>
  );
};

export default Component;
