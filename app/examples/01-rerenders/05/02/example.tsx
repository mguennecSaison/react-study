import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { LoggingComponent } from "~/components/common/LoggingComponent";

const ContextData = createContext<number>(1);
const ContextApi = createContext<Dispatch<SetStateAction<number>>>(
  () => undefined
);
const Provider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1);

  return (
    <ContextData.Provider value={state}>
      <ContextApi.Provider value={setState}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

const useData = () => useContext(ContextData);
const useApi = () => useContext(ContextApi);

const Child1 = () => {
  const api = useApi();
  console.log("Child that uses API re-renders");

  const onClick = () => {
    api(Math.random());
  };

  return <LoggingComponent name="Child1"><button onClick={onClick}>Set random value to context</button></LoggingComponent>;
};

const Child2 = () => {
  const value = useData();
  return <LoggingComponent name="Child2">{value}</LoggingComponent>;
};
const Component = () => {
  return (
    <Provider>
      <h2>Open console, click a button</h2>
      <p>Only child that uses data will re-render</p>
      <p>Child that triggers data update doesn&apos;t</p>

      <Child1 />
      <Child2 />
    </Provider>
  );
};

export default Component;
