import { io } from '@/app';
import { ResponseWithIo } from '@/config/configSocket';
import { kitchenRepository } from '@/repositories/kitchen-repository';
import { Request } from 'express';
import httpStatus from 'http-status';

export async function findAllOrders(req: Request, res: ResponseWithIo) {
  const { userId } = res.locals;
  

  const order = await kitchenRepository.findDishOrders();

  io.emit('msg', order);

  res.status(httpStatus.OK).send(order);
}
