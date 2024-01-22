import React, { ReactNode } from "react";
import { LoggingComponent } from "~/components/common/LoggingComponent";

export const Child = ({ value, simpleValue }: { value?: { value?: string | number }, simpleValue?: string | number }) => {
  const val = simpleValue ?? value?.value
  return (<LoggingComponent name={val ? `${val}` :  'Child'}>{val}</LoggingComponent>);
  }
export const ChildMemo = React.memo(Child);

export const Parent = ({
  left,
  children,
  name = 'Parent'
}: {
  children: ReactNode;
  left: ReactNode;
  name?: string
}) => {
  return (
    <LoggingComponent name={name}><div>
      {left}
      {children}
    </div></LoggingComponent>
  );
};

export const ParentMemo = React.memo(Parent);