import { prisma } from "@/config";


export async function verifyWaiter(userId:number){
  return prisma.employee.findFirst({
    where:{
      job:{name:"Garçom"},
      AND:{userId}
    },
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

export async function findAllWaiter(){
  return prisma.employee.findMany({
    where:{
      job:{name:"Garçom"}
    },
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