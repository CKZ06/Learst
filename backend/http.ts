import type { Response } from 'express';

export function success(response: Response, message: string, data: unknown, status = 200) {
  return response.status(status).json({ success: true, message, data });
}

export function failure(response: Response, message: string, status = 400, data: unknown = null) {
  return response.status(status).json({ success: false, message, data });
}
