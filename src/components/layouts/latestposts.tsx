import { ReactNode } from 'react';

type LatestPostsProps = {
  children: ReactNode;
};

const LatestPosts = ({ children }: LatestPostsProps) => {
  return <div className="grid grid-cols-2">{children}</div>;
};

export default LatestPosts;
