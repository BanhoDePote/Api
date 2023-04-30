import { prisma } from "@/config";


 async function verifyWaiter(userId:number){
  return prisma.employee.findFirst({
    where:{
      job:{name:"Garçom"},
      AND:{userId}
    },
    select:{
          id:true,
        
      }
    }
  )
}

async function findAllOrderByWaiter(userId:number){
    return prisma.order.findMany({
      where:{
        waiterId:userId
      }
    })
}

async function findAllWaiter(){
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

async function findAllDishTypes() {
  return prisma.category.findMany({
    include:{
      dishes:true
    }
  })
}

export const waiterRepository = {
  findAllDishTypes,findAllWaiter,findAllOrderByWaiter,verifyWaiter
}