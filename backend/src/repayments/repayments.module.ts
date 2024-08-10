import { Module } from '@nestjs/common';
import { RepaymentsService } from './repayments.service';
import { RepaymentsController } from './repayments.controller';
import { PrismaService } from '../prisma/prisma.service'; // Ensure the path is correct

@Module({
  providers: [RepaymentsService, PrismaService],
  controllers: [RepaymentsController],
})
export class RepaymentsModule {}
