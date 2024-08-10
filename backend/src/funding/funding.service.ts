import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FundingDto } from './dto/funding.dto';

@Injectable()
export class FundingService {
  constructor(private readonly prisma: PrismaService) {}

  async fundLoan(fundingDto: FundingDto) {
    const { userId, loanRequestId, amount } = fundingDto;

    // Update the loan request with the funded amount
    await this.prisma.loanRequest.update({
      where: { id: loanRequestId },
      data: {
        fundedAmount: { increment: amount },
      },
    });

    // Optionally, you might want to log or update the user's wallet here
    // Example: await this.prisma.wallet.update({ where: { userId }, data: { balance: { decrement: amount } } });

    return { message: 'Loan funded successfully.' };
  }
}
