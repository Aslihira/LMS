import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { RepaymentsService } from './repayments.service';
import { RepaymentDto } from './dto/repayment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@Controller('repayments')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class RepaymentsController {
  constructor(private readonly repaymentsService: RepaymentsService) {}

  @Post()
  async recordRepayment(@Body() repaymentDto: RepaymentDto) {
    return this.repaymentsService.recordRepayment(repaymentDto);
  }
}
