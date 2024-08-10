// src/prisma/prisma.module.ts

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Adjust path if necessary

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}