import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { NpaManagementService } from './npa-management.service';
import { MarkNpaDto } from './dto/mark-npa.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@ApiTags('npa') // Group under 'npa' tag in Swagger
@Controller('npa')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class NpaManagementController {
  constructor(private readonly npaManagementService: NpaManagementService) {}

  @Post()
  @ApiOperation({ summary: 'Mark a loan as Non-Performing Asset (NPA)' }) // Operation summary
  @ApiBody({ type: MarkNpaDto, description: 'Details required to mark a loan as NPA' }) // Request body documentation
  @ApiResponse({ status: 201, description: 'Loan marked as NPA successfully.' }) // Successful response documentation
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response documentation
  @ApiResponse({ status: 401, description: 'Unauthorized' }) // Unauthorized response documentation
  async markAsNpa(@Body() markNpaDto: MarkNpaDto) {
    return this.npaManagementService.markAsNpa(markNpaDto);
  }
}
