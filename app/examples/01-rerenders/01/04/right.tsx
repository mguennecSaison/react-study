import { ReactNode, useState } from "react";
import { VerySlowComponent } from "../common";

const ComponentWithClick = ({
  left,
  right
}: {
  left: ReactNode;
  right: ReactNode;
}) => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <div onClick={onClick} role="none">
      <p>Re-render count: {state}</p>
      {left}
      <p>Something</p>
      {right}
    </div>
  );
};

const Component = () => {
  const left = (
    <>
      <h3>component with slow components passed as props</h3>
      <p>Click the block - slow components will NOT re-render</p>

      <VerySlowComponent />
    </>
  );

  const right = <VerySlowComponent name="AnotherVerySlowCompnent" />;

  return (
    <>
      <ComponentWithClick left={left} right={right} />
    </>
  );
};

export default Component;
