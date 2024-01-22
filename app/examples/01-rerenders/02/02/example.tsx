import { useMemo, useState } from "react";
import { Child, ChildMemo, Parent, ParentMemo } from "../../common";


const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const memoValue = useMemo(() => ({ value: "memoized" }), []);

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Children of memoized Parent should re-render</p>
      <p>Memoized children of not memoized parent should not</p>

      <button onClick={onClick}>click here</button>

      <ParentMemo
        left={<Child value={{ value: "left child of ParentMemo" }} />}
        name="ParentMemo"
      >
        <Child value={{ value: "child of ParentMemo" }} />
      </ParentMemo>

      <Parent left={<ChildMemo value={memoValue} />}>
        <ChildMemo value={memoValue} />
      </Parent>
    </>
  );
};

export default Component;
