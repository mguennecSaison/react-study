import { useMemo, useState } from "react";
import { Child } from "../../common";

const values = [1, 2, 3];

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const items = useMemo(() => {
    return values.map((val) => <Child key={val} value={{ value: val }} />);
  }, []);

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Children should not re-render</p>

      <button onClick={onClick}>click here {state}</button>
      <br />
      <br />
      {items}
    </>
  );
};

export default Component;
