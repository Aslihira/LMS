import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}

  async addFunds(userId: string, amount: number, paymentMethod: string) {
    // Find the wallet by userId (assuming userId is not unique, you should ensure it's unique or use another identifier)
    const wallet = await this.prisma.wallet.findFirst({
      where: { userId },  // Using findFirst instead of findUnique if userId is not unique
    });

    if (!wallet) {
      throw new NotFoundException('Wallet not found for the given user ID');
    }

    // Update the wallet's balance and payment method
    const updatedWallet = await this.prisma.wallet.update({
      where: { id: wallet.id },  // Using wallet.id which is assumed to be unique
      data: {
        balance: {
          increment: amount,
        },
        paymentMethod,
      },
    });

    return {
      message: 'Funds added successfully.',
      walletDetails: {
        id: updatedWallet.id,
        userId: updatedWallet.userId,
        balance: updatedWallet.balance,
        paymentMethod: updatedWallet.paymentMethod,
      },
    };
  }
}
