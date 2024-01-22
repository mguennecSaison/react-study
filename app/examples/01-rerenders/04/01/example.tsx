import { useState } from "react";
import { ChildMemo } from "../../common";

const values = [1, 2, 3];

const Component = () => {
  const [state, setState] = useState(1);

    const onClick = () => {
      setState(state + 1);
    };
  
    return (
      <>
        <h2>Open console, click a button</h2>
        <p>Static lists with index and id as key</p>
        <p>both lists are fine</p>
        <p>Children should not re-render</p>
  
        <button onClick={onClick}>click here {state}</button>
        <br />
        <br />
        {values.map((val) => (
          <ChildMemo simpleValue={val} key={Math.random()} />
        ))}
      </>
    );
  };

export default Component;
