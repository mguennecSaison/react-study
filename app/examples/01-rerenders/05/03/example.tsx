import { ReactNode, createContext, useContext, useState } from "react";
import { LoggingComponent } from "~/components/common/LoggingComponent";

const ContextData1 = createContext<number>(1);
const ContextData2 = createContext<string>("bla");

const Provider = ({ children }: { children: ReactNode }) => {
  const [numState, setNumState] = useState(1);
  const [strState, setStrState] = useState("bla");

  return (
    <ContextData1.Provider value={numState}>
      <ContextData2.Provider value={strState}>
        <button onClick={() => setNumState(numState + 1)}>
          click to change number
        </button>
        <button onClick={() => setStrState(`${strState}a`)}>
          click to change string
        </button>
        {children}
      </ContextData2.Provider>
    </ContextData1.Provider>
  );
};

const useNumData = () => useContext(ContextData1);
const useStrData = () => useContext(ContextData2);

const Child1 = () => {
  const num = useNumData();

  return <LoggingComponent name="Child1">{num}</LoggingComponent>;
};

const Child2 = () => {
  const str = useStrData();

  return <LoggingComponent name="Child2">{str}</LoggingComponent>;
};
const Component = () => {
  return (
    <Provider>
      <h2>Open console, click a button</h2>
      <p>Click buttons to trigger independent data updates</p>
      <p>
        Children under the same context &quot;provider&quot;, but updated independently
      </p>
      <Child1 />
      <Child2 />
    </Provider>
  );
};

export default Component;
