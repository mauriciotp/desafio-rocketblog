import { ReactNode } from 'react';

type FirstContentProps = {
  children: ReactNode;
};

const FirstContent = ({ children }: FirstContentProps) => {
  return (
    <section className="bg-purple-bg border-b-4 border-b-green">
      {children}
    </section>
  );
};

export default FirstContent;
