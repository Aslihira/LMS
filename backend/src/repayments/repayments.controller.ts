import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { RepaymentsService } from './repayments.service';
import { RepaymentDto } from './dto/repayment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@ApiTags('repayments') // Group under 'repayments' tag in Swagger
@Controller('repayments')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class RepaymentsController {
  constructor(private readonly repaymentsService: RepaymentsService) {}

  @Post()
  @ApiOperation({ summary: 'Record a loan repayment' }) // Operation summary
  @ApiBody({ type: RepaymentDto, description: 'Details required to record a repayment' }) // Request body documentation
  @ApiResponse({ status: 201, description: 'Repayment recorded successfully.' }) // Successful response documentation
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response documentation
  @ApiResponse({ status: 401, description: 'Unauthorized' }) // Unauthorized response documentation
  async recordRepayment(@Body() repaymentDto: RepaymentDto) {
    return this.repaymentsService.recordRepayment(repaymentDto);
  }
}
