import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { NpaManagementService } from './npa-management.service';
import { MarkNpaDto } from './dto/mark-npa.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the path is correct

@Controller('npa')
@UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to protect this route
export class NpaManagementController {
  constructor(private readonly npaManagementService: NpaManagementService) {}

  @Post()
  async markAsNpa(@Body() markNpaDto: MarkNpaDto) {
    return this.npaManagementService.markAsNpa(markNpaDto);
  }
}
