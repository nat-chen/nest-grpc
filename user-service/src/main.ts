import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // Create your regular nest application.
  const app = await NestFactory.create(AppModule);
  // Then combine it with your microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5001',
      package: 'userproto',
      protoPath: join(__dirname, './proto/user/user.proto'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       url: 'localhost:5001', // default is 5000
  //       package: 'userproto',
  //       protoPath: join(__dirname, './proto/user/user.proto'),
  //     },
  //   },
  // );
  // await app.listen();
}
bootstrap();
