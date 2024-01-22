import { useMemo, useState } from "react";
import { ChildMemo } from "../../common";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const memoValue = useMemo(() => ({ value: "second" }), []);

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>First child re-renders, since its props are not memoised</p>
      <p>Second child doesn&apos;t re-render</p>

      <button onClick={onClick}>click here</button>
      <br />
      <ChildMemo value={{ value: "first" }} />
      <br />
      <ChildMemo value={memoValue} />
    </>
  );
};

export default Component;
