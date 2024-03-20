import { Module } from '@nestjs/common';
import { ProtousersController } from './users.controller';

@Module({
  controllers: [ProtousersController],
})
export class UsersModule {}
