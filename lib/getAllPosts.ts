import { cache } from "react";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
export const getAllPosts = async () => {
   try{
    const posts = await fetch(`${siteUrl}/api/posts`,{cache:"no-store"}).then((res) => res.json());
    if (!posts) {
        // console.log();
        return null;
      }
      return posts;
    } catch (error) {
      console.log(error);
      return null;
    }
}

export default getAllPosts
