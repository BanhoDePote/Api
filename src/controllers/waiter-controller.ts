import { Dishes } from '@/services';
import waiterService from '@/services/waiter-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';



export async function createOrder(req: Request, res: Response) {
  const { userId } = res.locals;
  const tableId = parseInt(req.params.tableId);
  const dishes: Dishes[] = req.body.dishes;

  const order = await waiterService.createOrder({userId, tableId, dishes});
  
  res.status(httpStatus.OK).send(order)
    
}
