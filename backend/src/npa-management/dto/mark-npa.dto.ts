import { ApiProperty } from '@nestjs/swagger';

export class MarkNpaDto {
  @ApiProperty({
    description: 'The unique identifier of the loan request being marked as NPA',
    example: 'loan-request-id',
  })
  loanRequestId: string;

  @ApiProperty({
    description: 'The status of the loan (e.g., "NPA", "Active", "Closed")',
    example: 'NPA',
  })
  status: string;

  @ApiProperty({
    description: 'The reason for marking the loan as NPA',
    example: 'Payment default for more than 90 days',
  })
  reason: string;
}
