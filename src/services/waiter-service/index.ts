import { prisma } from '@/config';
import orderRepository from '@/repositories/order-repository';
import { waiterRepository } from '@/repositories/waiter-repository';
import { notFoundWaiter } from './errors';

async function createOrder(orderData: OrderData) {

    const { userId, tableId } = orderData;
    
    const waiter = await waiterRepository.verifyWaiter(userId);

    if(!waiter) throw notFoundWaiter();

    const orderTable = await waiterRepository.findAllOrderByTableId(waiter.id, tableId)


    if(orderTable){
        const orderId = orderTable.dishes[0].orderId;
       return  await waiterRepository.updateOrder(orderId, orderData.dishes)
    }

    orderData.userId = waiter.id;
    return await orderRepository.createOrder(orderData);

}

async function getOrderByWaiterId(userId:number) {
    
    const waiter = await waiterRepository.verifyWaiter(userId);

    if(!waiter) throw notFoundWaiter();

    const orders = await waiterRepository.findAllOrderByWaiter(waiter.id);
    const dishes = await waiterRepository.findAllDishTypes();

    return {orders, dishes}

}


async function getOrderByTableId(userId:number, tableId:string) {
    
    const waiter = await waiterRepository.verifyWaiter(userId);

    if(!waiter) throw notFoundWaiter();

    const orders = await waiterRepository.findAllOrderByTableId(waiter.id, Number(tableId));

    return orders

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
    createOrder,getOrderByWaiterId,getOrderByTableId
};

export default waiterService;
//export * from './errors';
