
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    
    try{
      const data = await prisma.posts.findMany({
        take:10,
       select:{
        ID:true,
        categories:true,
        post_type:true,
        post_name:true,
       

       }
      });
     
      const formatedPosts = data.map((post:any) => ({
        ...post,
        ID: Number(post.ID),
        comment_count: Number(post.comment_count),
      }));
      return NextResponse.json(formatedPosts);
  } catch (error) {
      console.log(error);
    return NextResponse.json({ error: error }, { status: 403 });
  }
}