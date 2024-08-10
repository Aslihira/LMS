import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { LoanRequestsService } from './loan-requests.service';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@Controller('loan-requests')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class LoanRequestsController {
  constructor(private readonly loanRequestsService: LoanRequestsService) {}

  @Post()
  async createLoanRequest(@Body() createLoanRequestDto: CreateLoanRequestDto) {
    return this.loanRequestsService.createLoanRequest(createLoanRequestDto);
  }
}
