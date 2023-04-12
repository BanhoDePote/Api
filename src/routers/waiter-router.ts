import { Router } from 'express';

import { createUserSchema } from '@/schemas';
import { authenticateToken, validateBody } from '@/middlewares';
import { createOrder } from '@/controllers';

const waiterRouter = Router();

waiterRouter.all('/*', authenticateToken);

// waiterRouter.post('/', validateBody(createUserSchema), usersPost);
waiterRouter.post('/create-order/:tableId', createOrder);

export { waiterRouter };
