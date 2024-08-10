import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DistributeInterestDto } from './dto/distribute-interest.dto';

@Injectable()
export class InterestDistributionService {
  constructor(private prisma: PrismaService) {}

  async distributeInterest(distributeInterestDto: DistributeInterestDto) {
    const { loanRequestId, interestAmount } = distributeInterestDto;

    // Assuming the shares are calculated as follows
    const lenderShare = interestAmount * 0.7; // 70% to lender
    const platformShare = interestAmount * 0.2; // 20% to platform
    const distributorShare = interestAmount * 0.1; // 10% to distributor

    // Store distribution in database (this would depend on your schema)
    const distributionDetails = await this.prisma.interestDistribution.create({
      data: {
        loanRequestId,
        interestAmount,
        lenderShare,
        platformShare,
        distributorShare,
      },
    });

    return {
      message: 'Interest distributed successfully.',
      distributionDetails,
    };
  }
}
