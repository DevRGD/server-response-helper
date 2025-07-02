/// <reference types="vitest/globals" />
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { response } from '../src/index';
import { responseHelper } from '../src/middleware';
import { statusMessages } from '../src/messages';

const mockResponse = (): Response => {
  const res: Partial<Response> = {};
  res.status = vi.fn().mockReturnThis();
  res.json = vi.fn().mockReturnThis();
  return res as Response;
};

const mockRequest = (path = '/test'): Request => {
  const req: Partial<Request> = { path };
  return req as Request;
};

const mockNext = (): NextFunction => vi.fn();

describe('Core `response` function', () => {
  let res: Response;

  beforeEach(() => {
    res = mockResponse();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-28T13:23:45.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should send a response with a custom string message and data', () => {
    const data = { id: 1 };
    response(res, 200, 'Success!', data, '/api/test');

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      message: 'Success!',
      data: { id: 1 },
      timestamp: '2025-06-28T13:23:45.000Z',
      path: '/api/test',
    });
  });

  it('should send a response using a valid message index', () => {
    response(res, 404, 0, undefined, '/not-found');

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      status: 404,
      message: statusMessages[404][0],
      timestamp: '2025-06-28T13:23:45.000Z',
      path: '/not-found',
    });
  });

  it('should use the first default message if the message index is invalid', () => {
    response(res, 403, 99);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: statusMessages[403][0],
      })
    );
  });

  it('should use the default message and not include data or path when not provided', () => {
    response(res, 201);

    expect(res.status).toHaveBeenCalledWith(201);

    const responsePayload = (res.json as any).mock.calls[0][0];

    expect(responsePayload).toEqual({
      status: 201,
      message: statusMessages[201][0],
      timestamp: '2025-06-28T13:23:45.000Z',
    });

    expect(responsePayload).not.toHaveProperty('data');
    expect(responsePayload).not.toHaveProperty('path');
  });

  it('should handle unknown status codes with a custom message', () => {
    response(res, 999, 'A very strange error occurred');
    expect(res.status).toHaveBeenCalledWith(999);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 999,
        message: 'A very strange error occurred',
      })
    );
  });

  it('should handle unknown status codes with a default "Unknown status" message', () => {
    response(res, 999);
    expect(res.status).toHaveBeenCalledWith(999);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 999,
        message: 'Unknown status',
      })
    );
  });
});

describe('`responseHelper` middleware', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = mockRequest('/api/user/1');
    res = mockResponse();
    next = mockNext();
    vi.useFakeTimers().setSystemTime(new Date('2025-06-28T13:23:45.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should attach the `response` function to the res object', () => {
    const middleware = responseHelper();
    middleware(req, res, next);
    expect(res.response).toBeInstanceOf(Function);
  });

  it('should call next() once after attaching the function', () => {
    const middleware = responseHelper();
    middleware(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should call the core response function and automatically use `req.path`', () => {
    const middleware = responseHelper();
    middleware(req, res, next);

    const data = { name: 'Gautam' };
    res.response(200, 'User found', data);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      message: 'User found',
      data,
      timestamp: '2025-06-28T13:23:45.000Z',
      path: '/api/user/1',
    });
  });

  it('should allow overriding the automatically provided path', () => {
    const middleware = responseHelper();
    middleware(req, res, next);

    res.response(404, 'Resource not found', undefined, '/custom/path/override');
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        path: '/custom/path/override',
      })
    );
  });

  it('should work correctly using all default parameters', () => {
    const middleware = responseHelper();
    middleware(req, res, next);

    res.response(503);

    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.json).toHaveBeenCalledWith({
      status: 503,
      message: statusMessages[503][0],
      timestamp: '2025-06-28T13:23:45.000Z',
      path: '/api/user/1',
    });
  });
});
