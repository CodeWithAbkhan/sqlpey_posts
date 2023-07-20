
import prisma from "@/lib/prisma";
import { PrismaClient } from '@prisma/client'

import { cache } from "react";


const getCategories =  async () => {
try{
    const data = await prisma.posts.findMany({
        select: {
          categories: true,
        },
        where: {
          categories: {
            NOT: null,
          },
        },
        distinct: ['categories'], // Use this line if you want to retrieve distinct categories
      });
      
  
  return data; 

  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCategories;
