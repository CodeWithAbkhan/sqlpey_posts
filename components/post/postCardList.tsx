
import { randomInt, randomUUID } from "crypto";
import PostCard from "./postCard";



const PostCardList = ({ posts }:any) => {
 
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr ">
      {posts.map((post:any) => {
         const ind = Number(post?.ID) || "0" ;
        return <PostCard direction="vertical" key={ind} post={post} />;
      })}
    </div>
  );
};

export default PostCardList;
