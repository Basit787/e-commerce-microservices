import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  constructor(@Inject('Orders_Service') private ordersService: ClientProxy) {}

  create(createOrderInput: CreateOrderInput) {
    return firstValueFrom(
      this.ordersService.send('createOrder', createOrderInput),
    );
  }

  findAll() {
    return firstValueFrom(this.ordersService.send('findAllOrders', {}));
  }

  findOne(id: number) {
    return firstValueFrom(this.ordersService.send('findOneOrder', id));
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return firstValueFrom(
      this.ordersService.send('updateOrder', { id, ...updateOrderInput }),
    );
  }

  remove(id: number) {
    return firstValueFrom(this.ordersService.send('removeOrder', {}));
  }
}
