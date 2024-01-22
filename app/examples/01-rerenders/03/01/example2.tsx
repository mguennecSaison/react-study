import { useEffect, useMemo, useState } from "react";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = { value: "not memoized" };

  const memoValue = useMemo(() => ({ value: "memoized" }), []);

  useEffect(() => {
    console.log("never triggered");
  }, [memoValue]);

  useEffect(() => {
    console.log("triggered on every re-render");
  }, [value]);

  return (
    <>
      <h2>Open console, click a button</h2>
      <p>One of the effects will be triggered on every render</p>

      <button onClick={onClick}>click here</button>
    </>
  );
};

export default Component;
