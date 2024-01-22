import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { LoggingComponent } from "~/components/common/LoggingComponent";

const Context = createContext<{ value: number }>({ value: 1 });
const useValueWithMemo = () => useContext(Context);

export const ProviderWithMemo = ({ children }: { children: ReactNode }) => {
  const [state] = useState(1);

  const value = useMemo(
    () => ({
      value: state,
    }),
    [state]
  );
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const ProviderWithoutMemo = ({ children }: { children: ReactNode }) => {
  const [state] = useState(1);

  const value = {
    value: state,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
export const Child = () => {
  const { value } = useValueWithMemo();
  return <LoggingComponent name={`Child-${value}`} />;
};
export const ChildMemo = React.memo(Child);
