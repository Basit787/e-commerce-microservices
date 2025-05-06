import { Controller, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from './auth.guard';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('createUser')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @MessagePattern('login')
  signIn(@Payload() signInDto: Record<string, any>) {
    return this.usersService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @MessagePattern('findAllUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @MessagePattern('findOneUser')
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @MessagePattern('updateUser')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @MessagePattern('removeUser')
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}
