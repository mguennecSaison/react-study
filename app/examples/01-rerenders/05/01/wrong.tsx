import { useState } from "react";
import { ChildMemo, ProviderWithoutMemo } from "./common";

const Component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <ProviderWithoutMemo>
      <h2>Open console, click a button</h2>
      <p>
        Children will unnecessary re-render because of the provider,
        which doesn&apos;t memoize value
      </p>
      <button onClick={onClick}>button {state}</button>
      <ChildMemo />
    </ProviderWithoutMemo>
  );
};

export default Component;
