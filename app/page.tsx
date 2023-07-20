import AdsComponent from "@/components/AdsComponent";
import CtaCard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layouts/paddingContainer";
import PostCard from "@/components/post/postCard";
import PostCardList from "@/components/post/postCardList";
import getAllPosts from "@/lib/getAllPosts";
import { notFound } from "next/navigation";
type post= {
  post_title: string;
  post_date: Date;
  post_name: string;
  post_content: string;
  post_status: string;
  FeaturedImage: string | "";
  views: string | null;
  author: string | null;
  avatar: string | null;
  categories: string | null;
  comment_count: bigint | null;

}


export default async function Home() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) return notFound();
 
  return (
    <div className="">
      <PaddingContainer>
        <main className="space-y-10">
          <div className="flex flex-row">
            <div className="flex flex-col w-3/4">
              <PostCard direction="horizontal" post={posts[0]} />
              <PostCardList posts={[posts[1], posts[2]]} />
              {/* CTA */}
              <CtaCard />
              <PostCard reverse direction="horizontal" post={posts[3]} />
              <PostCardList posts={[posts[4], posts[5]]} />
            </div>
            <div className="hidden md:flex flex-col w-1/4">
              <AdsComponent />
              <AdsComponent />
            </div>
          </div>
        </main>
      </PaddingContainer>
    </div>
  );
}
