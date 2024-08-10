import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  async addFunds(userId: string, amount: number, paymentMethod: string) {
    // Logic to handle the paymentMethod, e.g., validate or process payment
    return this.prisma.wallet.update({
      where: { userId },
      data: { balance: { increment: amount } },
    });
  }
}
