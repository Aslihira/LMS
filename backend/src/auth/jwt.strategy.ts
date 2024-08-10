// src/auth/jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users/users.service'; // Adjust the path if necessary

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService, // Ensure this is the correct service
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'default-secret', // Ensure this matches the secret used in JwtModule
    });
  }

  async validate(payload: any) {
    // Implement your validation logic here
    return this.userService.findById(payload.sub); // Example: adjust according to your needs
  }
}
