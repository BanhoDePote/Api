import { prisma } from '@/config';
import orderRepository from '@/repositories/order-repository';
import { verifyWaiter } from '@/repositories/waiter-repository';
import { notFoundWaiter } from './errors';

async function createOrder(orderData: OrderData) {
    
    const waiter = await verifyWaiter(orderData.userId);

    if(!waiter) throw notFoundWaiter();

    orderData.userId = waiter.user.id;
    return await orderRepository.createOrder(orderData);

}

export interface Dishes {
    dishId: number,
    quantity: number,
    description: string
};

export type OrderData = {
    userId:number,
    tableId:number,
    dishes: Dishes[],
};
  
const waiterService = {
    createOrder,
};

export default waiterService;
//export * from './errors';
