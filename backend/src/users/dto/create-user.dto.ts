import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Jane Doe',
  })
  name: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'jane.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The password for the user account',
    example: 'securepassword',
  })
  password: string;
}
