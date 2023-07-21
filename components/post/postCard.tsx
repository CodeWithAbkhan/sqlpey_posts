
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import PostCardContent from "./postCardContent";
import DOMPurify from "dompurify";
type post= {
  ID:BigInt;
  post_title: string;
  post_date: Date;
  post_name: string;
  post_content: string;
  post_status: string;
  post_type:string;
  FeaturedImage: string | "";
  views: string | null;
  author: string | null;
  avatar: string | null;
  categories: string | null;
  comment_count: bigint | null;
};

interface PostCardProps {
  post: post;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
}
const PostCard = ({
  post,
  direction = "horizontal",
  reverse = false,
}: PostCardProps) => {
  const catList = post?.categories?.split(', ')|| [] ;
  let postType :string;
  if(post){

    if (post.post_type='post') {
      postType = catList[0];
    }
    else{
      postType = 'question';
    }
  }
  else{
    postType="sql"
  }
  
  const post_content = post?.post_content.split(" ").slice(0, 50).join(" ")||"";
    const post_excerpt =post_content.replace(/<[^>]*>/g, '')+ "....";
  // let wrappedContent = `<div>${content}`;

  // if (content.includes("<code>")) {
  //   wrappedContent += "</code></pre></div></div>";
  // } else {
  //   wrappedContent += "</div>";
  // }
  return (
    
    <Link
      href={`/${postType}/${post?.post_name}`}
      className={`@container ${
        direction === "horizontal"
          ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center "
          : " space-y-6 "
      }}`}
    >
      {/* Image */}
   
      {/* {post?.FeaturedImage !== "" && (
        <Image
          className={`rounded-md w-full object-cover object-center h-auto max-h-[300px] bg-neutral-100 ${
            reverse ? " md:order-last " : ""
          }`}
          width={600}
          height={400}
          alt={post?.post_title || ""}
          src={post?.FeaturedImage || ""}
          
        />
      )} */}

      {/* Content */}
      <div>
        <PostCardContent post={post} />
      <div className="prose prose-gray items-center">
      {<div dangerouslySetInnerHTML={{
          __html:post_excerpt + "...",
        }}/>}</div>

        <div className="flex items-center gap-2 mt-4">
          Read More <HiOutlineArrowUpRight />{" "}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
