import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { STATUS_CODES } from 'http';
import { Reflector } from '@nestjs/core';

export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<object> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();

        const key =
          this.reflector.get<string>('key', context.getHandler()) ?? 'data';

        // Get the status code from the response object
        const statusCode = response.statusCode;

        // Add the status name and code to the response body
        return {
          [key]: data,
          statusCode: statusCode,
          statusName: STATUS_CODES[statusCode],
        };
      }),
    );
  }
}
