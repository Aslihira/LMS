import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust path if necessary

@Module({
  imports: [PrismaModule],
  providers: [WalletService],
  controllers: [WalletController]
})
export class WalletModule {}
