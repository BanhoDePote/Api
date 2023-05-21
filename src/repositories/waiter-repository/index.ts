import { prisma } from '@/config';
import { Dishes } from '@/services';
import { Dish } from '@prisma/client';

async function verifyWaiter(userId: number) {
  return prisma.employee.findFirst({
    where: {
      job: { name: 'Garçom' },
      AND: { userId },
    },
    select: {
      id: true,
    },
  });
}

async function findAllOrderByWaiter(userId: number) {
  const pedidos = await prisma.order.findMany({
    where: {
      waiterId: userId,
    },
    select: {
      id:true,
      tableId:true,
      dishes: {
        select: {
          orderId: true,
          dishId: true,
          quantity: true,
          status: true,
          dish: {
            select: {
              name: true,
              price:true,
            },
          },
        },
      },
    },
  });

  return pedidos;
}

async function findAllWaiter() {
  return prisma.employee.findMany({
    where: {
      job: { name: 'Garçom' },
    },
    select: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

async function findAllDishTypes() {
  return prisma.category.findMany({
    include: {
      dishes: true,
    },
  });
}

async function findAllOrderByTableId(userId: number, tableId: number) {
  const order = await prisma.order.findFirst({
    where: {
      waiterId: userId,
      tableId: tableId,
      open:true,
    },
  
    select: {
      id:true,
      dishes: {
        select: {
          orderId: true,
          dishId: true,
          quantity: true,
          status: true,
          dish: {
            select: {
              name: true,
              price:true,
            },
          },
        },
      },
    },
  });





  return order;
}


const updateOrder = (orderId: number, dishes: Dishes[]) => {
  const orderDishes = dishes.map(dish => ({
    ...dish,
    orderId,
    quantity: dish.quantity,
  }));

  return prisma.orderDish.createMany({
    data: orderDishes
  });
};

export const waiterRepository = {
  findAllDishTypes,
  findAllWaiter,
  findAllOrderByWaiter,
  verifyWaiter,
  findAllOrderByTableId,
  updateOrder,
};
