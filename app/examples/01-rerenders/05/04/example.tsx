import React, { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { LoggingComponent } from "~/components/common/LoggingComponent";

const Context = createContext<{ value: number; staticValue: string }>({
  value: 1,
  staticValue: "",
});

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const value = useMemo(
    () => ({
      value: state,
      staticValue: "1",
    }),
    [state]
  );
  return (
    <Context.Provider value={value}>
      <button onClick={onClick}>click here</button>
      {children}
    </Context.Provider>
  );
};

const useValue = () => useContext(Context);

const Child1 = () => {
  const { value } = useValue();
  return <LoggingComponent name="Child1">{value}</LoggingComponent>;
};

const withStaticValueFromContext = (Component: typeof Child2) => {
  const ComponentMemo = React.memo(Component);

  // eslint-disable-next-line react/display-name
  return () => {
    const { staticValue } = useValue();
    return <ComponentMemo staticValue={staticValue} />;
  };
};

const Child2 = ({ staticValue }: { staticValue: string }) => {
  console.log("Child with static value re-renders", staticValue);
  return <LoggingComponent name="Child2">{staticValue}</LoggingComponent>;
};

const Child2WithStaticValue = withStaticValueFromContext(Child2);
const Component = () => {
  return (
    <Provider>
      <h2>Open console, click a button</h2>
      <p>Only child with dynamic content will re-render</p>
      <p>Child that uses context &quot;selector&quot; won&apos;t</p>

      <Child1 />
      <Child2WithStaticValue />
    </Provider>
  );
};

export default Component;
