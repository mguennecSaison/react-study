import { useState } from "react";
import { VerySlowComponent } from "../common";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const SlowComponent = () => <VerySlowComponent />;

  return (
    <>
      <button onClick={onClick}>click here</button>
      <SlowComponent />
    </>
  );
};

export default Component;
