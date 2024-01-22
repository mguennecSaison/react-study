import { PropsWithChildren, useEffect } from "react";

export const LoggingComponent = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  useEffect(() => {
    console.log(`${name}:mount`);
    () => {
      console.log(`${name}:unmount`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(`${name}:rerender`);
  return <>{children}</>
};
