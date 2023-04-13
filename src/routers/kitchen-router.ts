import { Router } from 'express';

import { createUserSchema } from '@/schemas';
import { authenticateToken, validateBody } from '@/middlewares';
import { findAllOrders } from '@/controllers';

const kitchenRouter = Router();

kitchenRouter.all('/*', authenticateToken);

// kitchenRouter.post('/', validateBody(createUserSchema), usersPost);
kitchenRouter.get('/', findAllOrders);

export { kitchenRouter };
