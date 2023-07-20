import prisma from "@/lib/prisma";
import { cache } from "react";
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
const getPostData = async (slug: string) => {
  // Get Post Data From Server
try{
  const post = await fetch(`${siteUrl}/api/posts/${slug}`).then((res) => res.json());
  
  
  return post; 

  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostData;
