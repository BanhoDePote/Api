import { prisma } from '@/config';

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
  });

  const pedidosPorMesa: any = {};

  for (const pedido of pedidos) {
    const { tableId } = pedido;
    if (!pedidosPorMesa[tableId]) {
      pedidosPorMesa[tableId] = [];
    }
    pedidosPorMesa[tableId].push(pedido);
  }

  return pedidosPorMesa;
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
  const orders = await prisma.order.findMany({
    where: {
      waiterId: userId,
      tableId: tableId,
    },
    select: {
      dishes: {
        select: {
          id: true,
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

  const orderDish = orders.map((order) => {
    return order.dishes.map((dish) => {
      return { ...dish, name: dish.dish.name , price:dish.dish.price};
    });
  });

  return orderDish;
}

export const waiterRepository = {
  findAllDishTypes,
  findAllWaiter,
  findAllOrderByWaiter,
  verifyWaiter,
  findAllOrderByTableId,
};
