import { prisma } from "@/config";


export async function findWaiter(userId: number) {
  return prisma.waiter.findFirst({
    where: { userId },
  });
}


export async function findAllWaiter(){
  return prisma.waiter.findMany({
    select:{
      user:{
        select:{
          id:true,
          name:true,
        }
      }
    }
  })
}