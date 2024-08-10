import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { InterestDistributionService } from './interest-distribution.service';
import { InterestDistributionController } from './interest-distribution.controller';

@Module({
  imports: [
    AuthModule, // Provides JwtStrategy and JwtAuthGuard
    PrismaModule, // Provides PrismaService
  ],
  controllers: [InterestDistributionController],
  providers: [InterestDistributionService], // No need to list PrismaService, JwtStrategy, JwtAuthGuard here
})
export class InterestDistributionModule {}
