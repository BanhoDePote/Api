import { prisma } from '@/config';
import orderRepository from '@/repositories/order-repository';
import { kitchenRepository } from '@/repositories/kitchen-repository';

async function findAllDishOrders() {
    return  await kitchenRepository.findDishOrders();
}

async function findAllDishOrdersPreparing() {
    return  await kitchenRepository.findDishPreparing();
}

const kitchenService = {
    findAllDishOrders,
};

export default kitchenService;
//export * from './errors';
