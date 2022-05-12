type PostTextProps = {
  date: string;
  title: string;
  text: string;
};

type PostProps = {
  alt: string;
  src: string;
  date: string;
  title: string;
  text: string;
};

export const PostText = ({ date, title, text }: PostTextProps) => {
  return (
    <div>
      <span className="text-black">{date}</span>
      <h2 className="text-purple-bg text-2xl font-poppins my-2">{title}</h2>
      <p className="text-black">{text}</p>
    </div>
  );
};

const Post = ({ src, alt, date, title, text }: PostProps) => {
  return (
    <div>
      <img className="mb-4 w-full" src={src} alt={alt} />
      <PostText date={date} title={title} text={text} />
    </div>
  );
};

export default Post;
