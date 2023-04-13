import { prisma } from "@/config";


 async function findDishOrders() {
  return prisma.order.findMany({
    select:{
      open:true,
      dishes:{
        where: { NOT:{status:"Pronto"}},
        select:{
          status:true,
          order:{
            select:{
              waiter:{select:{user:{select:{name:true}}}},
              dishes:{select:{dish:true, quantity:true}},
            }
          }
        }
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  });
}

 async function findDishPreparing() {
  return prisma.order.findMany({
    select:{
      open:true,
      dishes:{
        where: { status:"Preparando"},
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  });
}

 async function changeDishDone(dishId:number){
  return prisma.orderDish.update({
    where: { id: dishId },
    data: { status:"Pronto" },
  });
}

 async function changeDishPreparing(dishId:number){
  return prisma.orderDish.update({
    where: { id: dishId },
    data: { status:"Preparando" },
  });
}

export const kitchenRepository = {
  findDishOrders, findDishPreparing, changeDishDone,changeDishPreparing
}