import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { FundingService } from './funding.service';
import { FundingDto } from './dto/funding.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@Controller('fund-loan')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class FundingController {
  constructor(private readonly fundingService: FundingService) {}

  @Post()
  async fundLoan(@Body() fundingDto: FundingDto) {
    return this.fundingService.fundLoan(fundingDto);
  }
}
