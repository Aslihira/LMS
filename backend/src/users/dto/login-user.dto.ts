import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
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
