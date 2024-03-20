import { Controller, OnModuleInit, Inject, Get } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UserService {
  getUsers(obj: { [key: string]: any }): Observable<any>;
  t: 1;
}

@Controller('protousers')
export class ProtousersController implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('USERPROTO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get()
  async getProtoUsers() {
    return this.userService.getUsers({ a: 1 });
  }
}
