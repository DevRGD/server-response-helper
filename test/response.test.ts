/// <reference types="vitest/globals" />
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import response from '../src/index';
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

describe('`response` middleware', () => {
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
    response(req, res, next);
    expect((res as any).response).toBeInstanceOf(Function);
  });

  it('should call next() once after attaching the function', () => {
    response(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should use the attached function to send a response with `req.path`', () => {
    response(req, res, next);

    const data = { name: 'Gautam' };
    (res as any).response(200, 'User found', data);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: 200,
      message: 'User found',
      data,
      timestamp: '2025-06-28T13:23:45.000Z',
      path: '/api/user/1',
    });
  });

  it('should work correctly using all default parameters', () => {
    response(req, res, next);

    (res as any).response(503);

    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.json).toHaveBeenCalledWith({
      status: 503,
      message: statusMessages[503][0],
      timestamp: '2025-06-28T13:23:45.000Z',
      path: '/api/user/1',
    });
  });

  it('should handle unknown status codes with a default message', () => {
    response(req, res, next);

    (res as any).response(999);
    expect(res.status).toHaveBeenCalledWith(999);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 999,
        message: 'Unknown status',
      })
    );
  });
});
