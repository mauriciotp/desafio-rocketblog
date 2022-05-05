import { ReactNode } from "react";

type FirstSectionProps = {
  children: ReactNode;
};

const FirstSection = ({ children }: FirstSectionProps) => {
  return (
    <section className="bg-purple-bg border-b-4 border-b-green">
      {children}
    </section>
  );
};

export default FirstSection;
