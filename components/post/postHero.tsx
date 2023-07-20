import PostCardContent from "@/components/post/postCardContent";
import Image from "next/image";

type post= {
  ID:BigInt,
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
interface PostHeroProps {
  post: post;
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div className="@container">
      <PostCardContent isPostHero post={post} />
      {post.FeaturedImage? (<Image
        className="w-full h-auto mt-10 max-h-[300px] bg-neutral-100 md:max-h-[500px] object-cover object-center rounded-md"
        width={1280}
        height={628}
        src={post.FeaturedImage }
        alt={post.post_title!!}
      />):(<div></div>)}
    </div>
  );
};

export default PostHero;
