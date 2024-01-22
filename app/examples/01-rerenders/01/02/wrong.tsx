import { useState } from "react";
import { LoggingComponent } from "~/components/common/LoggingComponent";

const VerySlowComponent = () => {
  return (
    <LoggingComponent name="VerySlowComponent">
      Very slow component
    </LoggingComponent>
  );
};

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };


  return (
    <>
      <h3>component with everything</h3>
      <p>Click this button - slow component will re-render</p>
      <p>Re-render count: {state}</p>
      <button onClick={onClick}>click here</button>
      <VerySlowComponent />
    </>
  );
};

export default Component;
