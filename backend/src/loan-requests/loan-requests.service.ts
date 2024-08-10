import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';

@Injectable()
export class LoanRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async createLoanRequest(createLoanRequestDto: CreateLoanRequestDto) {
    const { userId, amount, purpose, duration, interestRate } = createLoanRequestDto;

    try {
      // Create a new loan request in the database
      const loanRequest = await this.prisma.loanRequest.create({
        data: {
          userId,
          amount,
          purpose,
          duration,
          interestRate,
          status: 'Pending', // Default status for new loan requests
          fundedAmount: 0,  // Assuming default value of 0 for fundedAmount
        },
      });

      return { message: 'Loan request created successfully.', loanRequest };
    } catch (error) {
      console.error('Error creating loan request:', error);
      throw new Error('Failed to create loan request.');
    }
  }
}
