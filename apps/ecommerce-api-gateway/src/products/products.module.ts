import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Product_Service',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
    UsersService,
  ],
  providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
