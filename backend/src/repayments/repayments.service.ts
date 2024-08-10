import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RepaymentDto } from './dto/repayment.dto';

@Injectable()
export class RepaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async recordRepayment(repaymentDto: RepaymentDto) {
    const { userId, loanRequestId, amount, repaymentDate } = repaymentDto;

    // Record the repayment
    const repayment = await this.prisma.repayment.create({
      data: {
        userId,
        loanRequestId,
        amount,
        repaymentDate,
        status: 'completed', // Assuming status is 'completed' for recorded repayments
      },
    });

    return {
      message: 'Repayment recorded successfully.',
      repaymentDetails: {
        repaymentId: repayment.id,
        loanRequestId: repayment.loanRequestId,
        amount: repayment.amount,
        repaymentDate: repayment.repaymentDate,
        status: repayment.status,
      },
    };
  }
}
