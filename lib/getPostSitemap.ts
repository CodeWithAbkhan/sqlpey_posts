import { cache } from "react";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
export const getPostSitemap = cache(async () => {
   try{
    const posts = await fetch(`${siteUrl}/api/posts/allposts`).then((res) => res.json());

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
)
export default getPostSitemap
