import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { failure } from './http.js';

export interface TokenUser {
  id: number;
  email: string;
  role: 'admin' | 'user';
}

const jwtSecret = process.env.JWT_SECRET ?? 'learts-development-secret-change-in-production';

export function createToken(user: TokenUser) {
  return jwt.sign(user, jwtSecret, { expiresIn: '8h' });
}

export function authenticate(request: Request, response: Response, next: NextFunction) {
  const header = request.header('authorization');
  const token = header?.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return failure(response, 'Authentication token is required.', 401);
  try {
    response.locals.user = jwt.verify(token, jwtSecret) as TokenUser;
    next();
  } catch {
    return failure(response, 'Token is invalid or expired.', 401);
  }
}

export function requireAdmin(_request: Request, response: Response, next: NextFunction) {
  const user = response.locals.user as TokenUser | undefined;
  if (user?.role !== 'admin') return failure(response, 'Administrator permission is required.', 403);
  next();
}
