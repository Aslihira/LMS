import { ApiProperty } from '@nestjs/swagger';

export class CreateLoanRequestDto {
  @ApiProperty({
    description: 'The unique identifier of the user requesting the loan',
    example: 'user-id',
  })
  userId: string;

  @ApiProperty({
    description: 'The amount of the loan being requested',
    example: 10000.0,
  })
  amount: number;

  @ApiProperty({
    description: 'The purpose for which the loan is requested',
    example: 'Home renovation',
  })
  purpose: string;

  @ApiProperty({
    description: 'The duration of the loan in months',
    example: 12,
  })
  duration: number;

  @ApiProperty({
    description: 'The annual interest rate of the loan in percentage',
    example: 5.5,
  })
  interestRate: number;
}
