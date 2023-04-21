import { CreateUserParams } from '@/services/users-service';
import Joi from 'joi';

const dishSchema = Joi.object({
  dishId: Joi.number().required(),
  quantity: Joi.number().integer().min(1).required()
});

export const createOrderSchema = Joi.object({

  dishes:Joi.array().items(dishSchema).required()
});

