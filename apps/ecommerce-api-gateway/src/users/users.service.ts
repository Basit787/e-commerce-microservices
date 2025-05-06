import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private userServive: ClientProxy) {}

  create(createUserInput: CreateUserInput) {
    return firstValueFrom(this.userServive.send('createUser', createUserInput));
  }

  findAll() {
    return firstValueFrom(this.userServive.send('findAllUsers', {}));
  }

  findOne(id: string) {
    return firstValueFrom(this.userServive.send('findOneUser', id));
  }

  update(updateUserInput: UpdateUserInput) {
    return firstValueFrom(
      this.userServive.send('updateUser', { ...updateUserInput }),
    );
  }

  remove(id: string) {
    return firstValueFrom(this.userServive.send('removeUser', id));
  }
}
