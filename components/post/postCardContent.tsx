import getReadingTime from "@/lib/getReadingTime";
import getRelativeDate from "@/lib/getRelativeDate";
type post= {
  ID:BigInt;
  post_title: string;
  post_date: Date;
  post_name: string;
  post_content: string;
  post_type:string;
  post_status: string;
  FeaturedImage: string | null;
  views: string | null;
  author: string | null;
  avatar: string | null;
  categories: string | null;
  comment_count: bigint | null;

}
interface PostCardContentProps {
  post: post;
  isPostHero?: boolean;
}
const PostCardContent = ({ post, isPostHero }: PostCardContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex flex-wrap @md:flex-nowrap items-center gap-1 @md:gap-2  text-xs @md:text-sm text-neutral-500">
        <div
          className={`font-medium ${
            post?.categories?.split(', ')[0] === "sql" 
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {/* { post.categories?.split(', ')[0] } */}
        </div>
        <div className="w-1 h-1 rounded-full bg-neutral-300 " />
        <div>{post?.author}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-300" />
        <div>{getReadingTime(post?.post_content!!)}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-300" />
        {/* <div>{getRelativeDate(post.post_date!!)}</div> */}
      </div>
      {/* Title */}
      <h1
        className={`font-semibold ${
          isPostHero ? "text-4xl" : "text-xl @md:text-2xl @lg:text-3xl"
        }`}
      >
        {post?.post_title}
      </h1>
     
    </div>
  );
};

export default PostCardContent;
