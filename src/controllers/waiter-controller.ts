import { io } from '@/app';
import { findAllDishTypes, findAllOrderByWaiter } from '@/repositories/waiter-repository';
import { Dishes } from '@/services';
import waiterService from '@/services/waiter-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';



export async function createOrder(req: Request, res: Response) {
  const { userId } = res.locals;
  const tableId = parseInt(req.params.tableId);
  const dishes: Dishes[] = req.body.dishes;

  const order = await waiterService.createOrder({userId, tableId, dishes});
  const orders = await findAllOrderByWaiter(userId);
  io.emit("orders", orders)

  res.status(httpStatus.OK).send(order)
    
}


export async function findAllOrdersByWaiter(req: Request, res: Response) {
  const { userId } = res.locals;

  const orders = await findAllOrderByWaiter(userId);

  io.emit("orders", orders)
  
  res.status(httpStatus.OK).send(orders);
    
}

export async function findAllDishes(req: Request, res: Response) {

  const dishes = await findAllDishTypes();
  
  res.status(httpStatus.OK).send(dishes);
    
}