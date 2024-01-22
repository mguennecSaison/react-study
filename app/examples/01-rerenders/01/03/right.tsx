import { ReactNode, useState } from "react";
import { VerySlowComponent } from "../common";

const ComponentWithClick = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <div onClick={onClick} role="none">
      <p>Re-render count: {state}</p>
      {children}
    </div>
  );
};

const Component = () => {
  return (
    <>
      <ComponentWithClick>
        <>
          <h3>component with slow component passed as children</h3>
          <p>Click the block - slow component will NOT re-render</p>

          <VerySlowComponent />
        </>
      </ComponentWithClick>
    </>
  );
};

export default Component;
