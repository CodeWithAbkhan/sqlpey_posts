import getCategories from "@/lib/getCategories";
import getAllPosts from "@/lib/getAllPosts";
import getPostSitemap from "@/lib/getPostSitemap";

type post= {
  categories:string;
  post_type:string;
  post_name:string;
  post_date:Date;
 
}

const siteUrl:any = process.env.NEXT_PUBLIC_DOMAIN_URL;
export default async function sitemap() {
 

  // Get All Posts from CMS
  const posts:post[] = await getPostSitemap();
  const postsUrls =
    posts?.map((post:post) => {
      const catList = post?.categories?.split(', ') || "sql";
      let postType :string;
      if (post.post_type==="question") {
       
        postType = 'question';
      }
      else{
        postType = catList[0];
      }
      return {
        url: `${siteUrl}/${postType}/${post.post_name}`,
        lastModified: post.post_date,
      };
    }) ?? [];

  // // Get All Categories from CMS
  // const categories = await getCategories();
  // const listCat: Set<string> = new Set();
  
  // const categoriesUrls = categories.map((category) => {
  //   const cat = category.split(', ');
  //   cat.forEach((c) => {
  //     listCat.add(c.toLowerCase()); // Convert to lowercase and add to the set
  //   });
  // });
  
  // // To get an array of unique categories without duplicates
  // const uniqueCategories = Array.from(listCat);
  
  // uniqueCategories?.map((category) => {
  //     return {
  //       url: `${siteUrl}/${category}`,
  //       lastModified: new Date(),
  //     };
  //   }) ?? [];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
  ];
}
