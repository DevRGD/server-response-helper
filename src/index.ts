import type { Response } from 'express';
import { statusMessages } from './messages.js';

export interface StandardResponse<T = any> {
  status: number;
  message: string;
  data?: T;
  timestamp: string;
  path?: string;
}

export function response<T = any>(
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

  const responsePayload: StandardResponse<T> = {
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
