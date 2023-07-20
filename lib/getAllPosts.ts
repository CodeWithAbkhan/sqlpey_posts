import { cache } from "react";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
export const getAllPosts = cache(async () => {
   
    const posts = await fetch(`${siteUrl}/api/posts`).then((res) => res.json());
    return posts;
}
)
export default getAllPosts
