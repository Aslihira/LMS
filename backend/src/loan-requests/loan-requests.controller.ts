import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LoanRequestsService } from './loan-requests.service';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@ApiTags('loan-requests') // Group under 'loan-requests' tag in Swagger
@Controller('loan-requests')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class LoanRequestsController {
  constructor(private readonly loanRequestsService: LoanRequestsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new loan request' }) // Operation summary
  @ApiBody({ type: CreateLoanRequestDto, description: 'Details required to create a loan request' }) // Request body documentation
  @ApiResponse({ status: 201, description: 'Loan request created successfully.' }) // Successful response documentation
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response documentation
  @ApiResponse({ status: 401, description: 'Unauthorized' }) // Unauthorized response documentation
  async createLoanRequest(@Body() createLoanRequestDto: CreateLoanRequestDto) {
    return this.loanRequestsService.createLoanRequest(createLoanRequestDto);
  }
}
