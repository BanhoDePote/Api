import { CreateUserParams } from '@/services/users-service';
import Joi from 'joi';

export const createUserSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
