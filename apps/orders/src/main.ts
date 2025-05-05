import { NestFactory } from '@nestjs/core';
import { OrdersAppModule } from './orders.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrdersAppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3003,
      },
    },
  );
  await app.listen();
}
bootstrap();
