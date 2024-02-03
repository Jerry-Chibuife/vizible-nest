import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'identifier', passwordField: 'password' });
  }

  validate(identifier: string, password: string) {
    console.log('Inside Local Strategy Validation');
    const user = this.authService.login({ identifier, password });
    console.log(user);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
