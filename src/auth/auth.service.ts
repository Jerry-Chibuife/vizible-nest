import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginRequestDto } from './dto/login-request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userModel: User,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  register(createAuthDto: CreateUserDto) {
    return this.userService.create(createAuthDto);
  }

  async login(loginRequestDto: LoginRequestDto) {
    const savedUser = await this.userService.findByUsernameOrEmail(
      loginRequestDto.identifier,
    );
    if (!savedUser) throw new HttpException('Invalid Credentials', 401);

    if (loginRequestDto.password == savedUser['password']) {
      const { password, ...user } = savedUser;
      return this.jwtService.sign(user);
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
