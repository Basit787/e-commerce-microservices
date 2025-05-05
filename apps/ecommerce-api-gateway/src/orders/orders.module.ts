import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Orders_Service',
        transport: Transport.TCP,
        options: {
          port: 3003,
        },
      },
    ]),
  ],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
