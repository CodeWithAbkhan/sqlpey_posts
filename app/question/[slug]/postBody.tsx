import AdsComponent from "@/components/AdsComponent";
import ShareLinks from "@/components/elements/shareLinks";

type post= {
  ID:BigInt,
  post_title:string;
  categories:string;
  post_content:string;
  post_status:string;
  post_name:string;
  FeaturedImage:string;
  author:string;
  post_date:string;
  avatar:string;
}

interface PostBodyProps {
  post: post;
}

const PostBody = ({ post }: PostBodyProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
      <div className="md:col-span-2">
        <ShareLinks url={post.post_name} />
        <br/>
        <AdsComponent />

      </div>
      <div className="md:col-span-10 blog-rich-text">
      <article className='
            prose w-full
            md:prose-lg
            prose-gray
            prose-img:rounded-xl
            prose-img:w-max
            prose-img:border
            prose-a:text-blue-600
            prose:mx-2
            
            overflow-hidden
            '>
          <div dangerouslySetInnerHTML={
            {__html:post.post_content}}/>
      
          </article >
      </div>
    </div>
  );
};

export default PostBody;
