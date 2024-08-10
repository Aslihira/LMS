import { Module } from '@nestjs/common';
import { LoanRequestsService } from './loan-requests.service';
import { LoanRequestsController } from './loan-requests.controller';
import { PrismaService } from '../prisma/prisma.service'; // Ensure the path is correct

@Module({
  providers: [LoanRequestsService, PrismaService],
  controllers: [LoanRequestsController],
})
export class LoanRequestsModule {}
