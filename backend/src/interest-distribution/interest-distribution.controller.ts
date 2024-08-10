import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { InterestDistributionService } from './interest-distribution.service';
import { DistributeInterestDto } from './dto/distribute-interest.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('interest-distribution')
@UseGuards(JwtAuthGuard)
export class InterestDistributionController {
  constructor(private readonly interestDistributionService: InterestDistributionService) {}

  @Post()
  async distributeInterest(@Body() distributeInterestDto: DistributeInterestDto) {
    return this.interestDistributionService.distributeInterest(distributeInterestDto);
  }
}
