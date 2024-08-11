import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { FundingService } from './funding.service';
import { FundingDto } from './dto/funding.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('fund-loan') // Group under 'fund-loan' tag in Swagger
@Controller('fund-loan')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class FundingController {
  constructor(private readonly fundingService: FundingService) {}

  @Post()
  @ApiOperation({ summary: 'Fund a loan request' }) // Operation summary
  @ApiBody({ type: FundingDto, description: 'Details of the loan funding' }) // Request body documentation
  @ApiResponse({ status: 200, description: 'Loan funded successfully.' }) // Successful response documentation
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response documentation
  @ApiResponse({ status: 401, description: 'Unauthorized' }) // Unauthorized response documentation
  async fundLoan(@Body() fundingDto: FundingDto) {
    return this.fundingService.fundLoan(fundingDto);
  }
}
