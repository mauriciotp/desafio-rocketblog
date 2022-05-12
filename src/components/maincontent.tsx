import { ReactNode } from 'react';

type MainContentProps = {
  children: ReactNode;
};

const MainContent = ({ children }: MainContentProps) => {
  return <main>{children}</main>;
};

export default MainContent;
