import { prisma } from '@/config';
import { OrderData } from '@/services';

async function createOrder(orderData: OrderData) {
  const dishes = orderData.dishes || [];

  const order = await prisma.order.create({
    data: {
      waiterId: orderData.userId,
      tableId: orderData.tableId,
      dishes: {
        create: dishes.map((dish) => ({
          dish: { connect: { id: dish.dishId } },
          quantity: dish.quantity,
        })),
      },
    },
    include: { dishes: true },
  });

  return order
}


const orderRepository = {
  createOrder,
};

export default orderRepository;
