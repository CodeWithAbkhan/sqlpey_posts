
import prisma from "@/lib/prisma";
import { cache } from "react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
     const {slug}  =params;
    try{
      const data = await prisma.posts.findMany({
       where:{
        post_name:slug,
       }
      });
     
      const formatedPosts = data.map((post:any) => ({
        ...post,
        ID: Number(post.ID),
        comment_count: Number(post.comment_count),
      }));
      return NextResponse.json(formatedPosts[0]);
  } catch (error) {
      console.log(error);
    return NextResponse.json({ error: error }, { status: 403 });
  }
}