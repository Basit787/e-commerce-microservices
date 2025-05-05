import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { EcommerceApiGatewayModule } from './ecommerce-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(EcommerceApiGatewayModule);
  app.startAllMicroservices();
  await app.listen(process.env.PORT!);
}
bootstrap();
