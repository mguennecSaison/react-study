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
