import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('protousers')
export class ProtousersController {
  @GrpcMethod('UserService', 'getUsers')
  getUsers(a, b, c) {
    console.log(a, b, c);
    return {
      users: [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 2,
          name: 'Roger',
        },
      ],
    };
  }
}
