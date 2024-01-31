import type { ErrorStatus } from './type';

export class ApiError extends Error {
  message: string;
  reason: string;
  status: ErrorStatus;
  timestamp: Date;
  constructor(message: string, reason: string, status: ErrorStatus, timestamp: Date) {
    super(message);
    this.message = message;
    this.reason = reason;
    this.status = status;
    this.timestamp = timestamp;
  }
}
