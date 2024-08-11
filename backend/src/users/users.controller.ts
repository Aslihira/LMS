import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('users') // Grouping the endpoints under the "users" tag in Swagger
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' }) // Description of the operation
  @ApiBody({ type: CreateUserDto, description: 'User registration details' }) // Documenting the body of the request
  @ApiResponse({ status: 201, description: 'Registration successful. Please check your email to verify your account.' }) // Response description
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: LoginUserDto, description: 'User login details' })
  @ApiResponse({ status: 200, description: 'Login successful. JWT token returned.' })
  @ApiResponse({ status: 401, description: 'Unauthorized. Invalid email or password.' })
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }
}
