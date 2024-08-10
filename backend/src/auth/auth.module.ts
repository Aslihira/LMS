import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from '../users/users.service'; // Adjust the import path as needed
import { PrismaService } from '../prisma/prisma.service'; // Adjust the import path as needed
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the path if necessary

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.hello || 'default-secret', // Use environment variable or default value
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
    PrismaModule,
  ],
  providers: [JwtStrategy, JwtAuthGuard, UsersService, PrismaService],
  exports: [JwtModule, JwtAuthGuard, JwtStrategy], // Export JwtModule, JwtAuthGuard, and JwtStrategy
})
export class AuthModule {}
