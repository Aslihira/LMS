import { ApiProperty } from '@nestjs/swagger';

export class FundingDto {
  @ApiProperty({
    description: 'The unique identifier of the user providing the funding',
    example: 'user-id',
  })
  userId: string;

  @ApiProperty({
    description: 'The unique identifier of the loan request being funded',
    example: 'loan-request-id',
  })
  loanRequestId: string;

  @ApiProperty({
    description: 'The amount of money being provided as funding',
    example: 1000.0,
  })
  amount: number;
}
