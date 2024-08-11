import { ApiProperty } from '@nestjs/swagger';

export class AddFundsDto {
  @ApiProperty({
    description: 'The unique identifier of the user adding funds',
    example: 'user-id',
  })
  userId: string;

  @ApiProperty({
    description: 'The amount of money to be added to the user\'s account',
    example: 100.0,
  })
  amount: number;

  @ApiProperty({
    description: 'The method of payment used for adding funds (e.g., credit card, PayPal)',
    example: 'credit card',
  })
  paymentMethod: string;
}
