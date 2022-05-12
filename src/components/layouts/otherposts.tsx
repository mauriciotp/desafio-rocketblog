import { ReactNode } from 'react';

type OtherPostsProps = {
  children: ReactNode;
};

const OtherPosts = ({ children }: OtherPostsProps) => {
  return <div className="grid grid-cols-3 gap-7 mt-16">{children}</div>;
};

export default OtherPosts;
