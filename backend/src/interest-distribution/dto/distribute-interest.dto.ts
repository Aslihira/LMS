import { ApiProperty } from '@nestjs/swagger';

export class DistributeInterestDto {
  @ApiProperty({
    description: 'The unique identifier of the loan request for which interest is being distributed',
    example: 'loan-request-id',
  })
  loanRequestId: string;

  @ApiProperty({
    description: 'The amount of interest to be distributed',
    example: 500.0,
  })
  interestAmount: number;
}
