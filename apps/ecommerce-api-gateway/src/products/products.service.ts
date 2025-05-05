import { Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ClientProxy } from '@nestjs/microservices';
import { UsersService } from '../users/users.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('Product_Service') private readonly productService: ClientProxy,
    private readonly userService: UsersService,
  ) {}

  create(createProductInput: CreateProductInput) {
    return firstValueFrom(
      this.productService.send('createProduct', createProductInput),
    );
  }

  findAll() {
    return firstValueFrom(this.productService.send('findAllProduct', {}));
  }

  findOne(id: number) {
    return firstValueFrom(this.productService.send('findOneProduct', id));
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return firstValueFrom(
      this.productService.send('updateProduct', { id, ...updateProductInput }),
    );
  }

  remove(id: number) {
    return firstValueFrom(this.productService.send('removeProduct', id));
  }
}
