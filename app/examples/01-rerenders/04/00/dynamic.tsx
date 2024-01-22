import { useState } from "react";
import { ChildMemo } from "../../common";

const values = [1, 2, 3];

const Component = () => {
  const [state, setState] = useState<"up" | "down">("up");

  const onClick = () => {
    setState(state === "up" ? "down" : "up");
  };

  const sortedValues = state === "up" ? values.sort() : values.sort().reverse();
  return (
    <>
      <h2>Open console, click a button</h2>
      <p>Dynamic lists with index and id as key</p>
      <p>Index as key doesn&apos;t work - children re-render. Id as key is fine</p>
      <p>Children should not re-render</p>

      <button onClick={onClick}>click here {state}</button>
      <br />
      <br />
      {sortedValues.map((val, index) => (
        <ChildMemo value={{value: `Child of index: ${val}`}} key={index} />
      ))}
      <br />
      <br />
      {sortedValues.map((val) => (
        <ChildMemo value={{value: `Child of id: ${val}`}} key={val} />
      ))}
    </>
  );
};

export default Component;
