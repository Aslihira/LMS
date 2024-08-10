import { Module } from '@nestjs/common';
import { NpaManagementService } from './npa-management.service';
import { NpaManagementController } from './npa-management.controller';
import { PrismaService } from '../prisma/prisma.service'; // Ensure the path is correct

@Module({
  providers: [NpaManagementService, PrismaService],
  controllers: [NpaManagementController],
})
export class NpaManagementModule {}
