import { Server, Socket } from "socket.io";
import { Response as Res } from 'express';

export interface Response extends Res {
  io: Server;
}

export interface ResponseWithIo extends Res {
  io: Socket;
}