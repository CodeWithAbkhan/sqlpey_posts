
import PostCard from "./postCard";
type post= {
  ID:BigInt;
  post_title: string;
  post_date: Date;
  post_name: string;
  post_content: string;
  post_status: string;
  post_type:string;
  FeaturedImage: string | null;
  views: string | null;
  author: string | null;
  avatar: string | null;
  categories: string | null;
  comment_count: bigint | null;
};


const PostCardList = ({ posts }:any) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr ">
      {posts.map((post:any) => {
        return <PostCard direction="vertical" key={Number(post.ID)} post={post} />;
      })}
    </div>
  );
};

export default PostCardList;
