import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { handleApplicationErrors } from '@/middlewares';
import { usersRouter, authenticationRouter, waiterRouter, kitchenRouter } from '@/routers';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { Response } from './config/configSocket';

const app = express();



app
  .use(cors({ origin: '*' }))
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/users', usersRouter)
  .use('/auth', authenticationRouter)
  .use('/waiter', waiterRouter)
  .use('/kitchen', kitchenRouter)
  .use(handleApplicationErrors);


export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}


export async function close(): Promise<void> {
  await disconnectDB();
}

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use((req, res:Response, next) => {
  res.io = io;
  next();
});

io.on("connection", socket =>{
  console.log(` homem conectado ai ${socket.id}`)
})


export  {server, io};

