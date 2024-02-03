import { IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  @IsNotEmpty()
  identifier: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
