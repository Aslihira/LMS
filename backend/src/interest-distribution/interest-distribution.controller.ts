import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { InterestDistributionService } from './interest-distribution.service';
import { DistributeInterestDto } from './dto/distribute-interest.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('interest-distribution') // Group under 'interest-distribution' tag in Swagger
@Controller('interest-distribution')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class InterestDistributionController {
  constructor(private readonly interestDistributionService: InterestDistributionService) {}

  @Post()
  @ApiOperation({ summary: 'Distribute interest for a loan request' }) // Operation summary
  @ApiBody({ type: DistributeInterestDto, description: 'Details required to distribute interest for a loan request' }) // Request body documentation
  @ApiResponse({ status: 200, description: 'Interest distributed successfully.' }) // Successful response documentation
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response documentation
  @ApiResponse({ status: 401, description: 'Unauthorized' }) // Unauthorized response documentation
  async distributeInterest(@Body() distributeInterestDto: DistributeInterestDto) {
    return this.interestDistributionService.distributeInterest(distributeInterestDto);
  }
}
