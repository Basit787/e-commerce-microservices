import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Min 8 digits required' })
  password: string;

  @IsOptional()
  role: string;
}

export type UserRoleType = 'admin' | 'user';
