import { ApiProperty } from '@nestjs/swagger';

export class RepaymentDto {
  @ApiProperty({
    description: 'The unique identifier of the user making the repayment',
    example: 'user-id',
  })
  userId: string;

  @ApiProperty({
    description: 'The unique identifier of the loan request being repaid',
    example: 'loan-request-id',
  })
  loanRequestId: string;

  @ApiProperty({
    description: 'The amount of money being repaid towards the loan',
    example: 250.0,
  })
  amount: number;

  @ApiProperty({
    description: 'The date when the repayment is made',
    example: '2024-08-15T00:00:00.000Z',
  })
  repaymentDate: Date;
}
