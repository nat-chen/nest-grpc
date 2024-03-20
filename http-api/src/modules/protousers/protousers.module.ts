import { Module } from '@nestjs/common';
import { ProtousersController } from './protousers.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERPROTO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          package: 'userproto',
          protoPath: join(__dirname, '../../proto/user/user.proto'),
        },
      },
    ]),
  ],
  controllers: [ProtousersController],
})
export class ProtousersModule {}
