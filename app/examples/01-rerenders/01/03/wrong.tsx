import { useState } from "react";
import { VerySlowComponent } from "../common";


const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <div onClick={onClick} role="none">
      <h3>component with everything</h3>
      <p>Click this component - slow component will re-render</p>
      <p>Re-render count: {state}</p>
      <VerySlowComponent />
    </div>
  );
};


export default Component;
