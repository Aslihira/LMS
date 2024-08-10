import { Module } from '@nestjs/common';
import { FundingService } from './funding.service';
import { FundingController } from './funding.controller';
import { PrismaService } from '../prisma/prisma.service'; // Ensure the path is correct

@Module({
  providers: [FundingService, PrismaService],
  controllers: [FundingController],
})
export class FundingModule {}
