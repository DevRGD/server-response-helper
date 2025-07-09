import type { Request, Response, NextFunction } from 'express';
import { statusMessages } from './messages.js';

function sendActualResponse<T = any>(
  res: Response,
  status: number,
  messageOrIndex: string | number = 0,
  data?: T,
  path?: string
): void {
  let message: string;
  const messages = statusMessages[status] || ['Unknown status'];

  if (typeof messageOrIndex === 'string') {
    message = messageOrIndex;
  } else {
    message = messages[messageOrIndex] || messages[0];
  }

  const responsePayload: Record<string, any> = {
    status,
    message,
    timestamp: new Date().toISOString(),
  };

  if (data !== undefined) {
    responsePayload.data = data;
  }

  if (path) {
    responsePayload.path = path;
  }

  res.status(status).json(responsePayload);
}

function response(req: Request, res: Response, next: NextFunction): void {
  res.response = function <T = any>(
    status: number,
    messageOrIndex?: string | number,
    data?: T
  ) {
    sendActualResponse(this, status, messageOrIndex, data, req.path);
  };

  next();
}

declare global {
  namespace Express {
    interface Response {
      response<T = any>(
        status: number,
        messageOrIndex?: string | number,
        data?: T
      ): void;
    }
  }
}

export default response;
