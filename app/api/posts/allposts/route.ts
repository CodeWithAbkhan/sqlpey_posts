
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    
    try{
      const data = await prisma.posts.findMany({
        select: {
          ID: true,
          post_type: true,
          post_name: true,
          post_date: true,
          categories: true,
        },
        where: {
          NOT: {
            post_name: {
              contains: "trashed", // Use the correct syntax for the 'contains' operator
            },
          },
        },
      });
      
      const formatedPosts = data.map((post:any) => ({
        ...post,
        ID: Number(post.ID)
      }));
      return NextResponse.json(formatedPosts);
  } catch (error) {
      console.log(error);
    return NextResponse.json({ error: error }, { status: 403 });
  }
}