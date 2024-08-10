import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MarkNpaDto } from './dto/mark-npa.dto';

@Injectable()
export class NpaManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async markAsNpa(markNpaDto: MarkNpaDto) {
    const { loanRequestId, status, reason } = markNpaDto;

    // Mark the loan as NPA
    const npaRecord = await this.prisma.loanRequest.update({
      where: { id: loanRequestId },
      data: {
        status: status, // Ensure the status field in your schema can hold 'NPA'
        npaReason: reason, // Ensure the reason field in your schema is available
        dateMarked: new Date(), // Assumes you have a dateMarked field in your schema
      },
    });

    return {
      message: 'Loan marked as NPA.',
      npaDetails: {
        loanRequestId: npaRecord.id,
        status: npaRecord.status,
        reason: npaRecord.npaReason,
        dateMarked: npaRecord.dateMarked,
      },
    };
  }
}
