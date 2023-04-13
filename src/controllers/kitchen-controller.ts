import { kitchenRepository } from '@/repositories/kitchen-repository';
import { Dishes } from '@/services';
import waiterService from '@/services/waiter-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';



export async function findAllOrders(req: Request, res: Response) {
  const { userId } = res.locals;
  
  const order = await kitchenRepository.findDishOrders();
  
  res.status(httpStatus.OK).send(order)
    
}
