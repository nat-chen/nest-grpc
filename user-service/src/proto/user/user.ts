/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'userproto';

export interface getUserRequest {
  a: number;
}

export interface getUsersResponse {
  users: User[];
}

export interface User {
  id: number;
  name: string;
}

export const USERPROTO_PACKAGE_NAME = 'userproto';

export interface UserServiceClient {
  getUsers(request: getUserRequest): Observable<getUsersResponse>;
}

export interface UserServiceController {
  getUsers(
    request: getUserRequest,
  ):
    | Promise<getUsersResponse>
    | Observable<getUsersResponse>
    | getUsersResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getUsers'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const USER_SERVICE_NAME = 'UserService';
