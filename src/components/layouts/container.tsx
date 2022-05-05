import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto px-2 py-16">{children}</div>;
};

export default Container;
