import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [
    {
      id: 1,
      name: 'user',
      email: 'user@gmail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    this.users.push({ ...createUserDto });
    return {
      message: 'User added successfully',
      data: this.users,
    };
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
