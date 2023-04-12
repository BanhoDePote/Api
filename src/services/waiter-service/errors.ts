import { ApplicationError } from '@/protocols';

export function notFoundWaiter(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'User does not exist or is not a waiter.',

  };
  
}