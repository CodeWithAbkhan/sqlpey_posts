
import prisma from "@/lib/prisma";
import { cache } from "react";


const getCommentsById = async (post_id) => {
try{
  const data = await prisma.comments.findMany({
    where: {
        comment_post_ID=post_id;
    },
  });
  
  
  return data; 

  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCommentsById;
