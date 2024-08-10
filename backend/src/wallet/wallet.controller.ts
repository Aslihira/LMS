import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { AddFundsDto } from './dto/add-funds.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('wallet')
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('add-funds')
  async addFunds(@Body() addFundsDto: AddFundsDto) {
    await this.walletService.addFunds(
      addFundsDto.userId,
      addFundsDto.amount,
      addFundsDto.paymentMethod
    );
    return { message: 'Funds added successfully.' };
  }
}
