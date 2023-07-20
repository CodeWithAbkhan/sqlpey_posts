import CtaCard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layouts/paddingContainer";
import PostHero from "@/components/post/postHero";
import getPostData from "@/lib/getPostData";
import { notFound } from "next/navigation";
import PostBody from "./postBody";
import AdsComponent from "@/components/AdsComponent";


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

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {

    const post = await getPostData(params.slug);
    const catList = post?.categories.split(', ') || [""];
      let postType :string;
     
        postType = catList[0];
    
        const plainText = post?.post_content.replace(/<[^>]*>/g, '') || "";
    const regex = /^([\s\S]{0,159}\s)/;
     const matchText = plainText.match(regex);

      const excerpt= matchText ? matchText[0] : plainText.slice(0, 160);
    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: post?.post_titl || "Not Found",
      description: excerpt || "Not Found",
      alternates: {
        canonical: `/question/${post.post_name}`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

// export async function generateStaticParams() {
//   const posts: post[] = await getAllPosts();

//   if (!posts) return [];

//   return posts?.map((post:post) => ({
//     slug: post?.post_name,
//   }));
// }

const BlogPage = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  const post = await getPostData(slug);
  if (!post) notFound();

  return (
    <PaddingContainer>
      <div className="space-y-10">
        <PostHero post={post} />
        <AdsComponent />
        <PostBody post={post} />
        <CtaCard />
      </div>
    </PaddingContainer>
  );
};

export default BlogPage;
