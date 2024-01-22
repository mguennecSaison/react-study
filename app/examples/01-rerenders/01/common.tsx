import { LoggingComponent } from "~/components/common/LoggingComponent";

export const VerySlowComponent = ({ name = "VerySlowComponent" }: {name?: string}) => {
  return <LoggingComponent name={name}>Very slow component</LoggingComponent>;
};
