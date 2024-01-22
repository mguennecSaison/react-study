import { useState } from "react";
import { VerySlowComponent } from "../common";


  const ComponentWithButton = () => {
    const [state, setState] = useState(1);
  
    const onClick = () => {
      setState(state + 1);
    };
  
    return (
      <>
        <p>Re-render count: {state}</p>
        <button onClick={onClick}>click here</button>
      </>
    );
  };

const Component = () => {
  return (
    <>
      <h3>component with state moved down</h3>
      <p>Click this button - slow component will NOT re-render</p>
      <ComponentWithButton />
      <VerySlowComponent />
    </>
  );
};

export default Component;
