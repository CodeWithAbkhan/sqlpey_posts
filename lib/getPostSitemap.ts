import { cache } from "react";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
export const getPostSitemap = cache(async () => {
   
    const posts = await fetch(`${siteUrl}/api/posts/getall`).then((res) => res.json());
    return posts;
}
)
export default getPostSitemap
