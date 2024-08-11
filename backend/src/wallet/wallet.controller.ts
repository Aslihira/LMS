import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { AddFundsDto } from './dto/add-funds.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('wallet') // Grouping under 'wallet' tag in Swagger
@Controller('wallet')
@UseGuards(JwtAuthGuard) // Applying JWT guard to protect this route
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('add-funds')
  @ApiOperation({ summary: 'Add funds to a user\'s account' }) // Operation summary
  @ApiBody({ type: AddFundsDto, description: 'Details required to add funds' }) // Request body documentation
  @ApiResponse({ status: 200, description: 'Funds added successfully.' }) // Successful response documentation
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Bad request response documentation
  async addFunds(@Body() addFundsDto: AddFundsDto) {
    await this.walletService.addFunds(
      addFundsDto.userId,
      addFundsDto.amount,
      addFundsDto.paymentMethod
    );
    return { message: 'Funds added successfully.' };
  }
}
