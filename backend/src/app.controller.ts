import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app') // Grouping the endpoints under the "app" tag in Swagger
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get a welcome message' }) // Describes what this endpoint does
  @ApiResponse({ status: 200, description: 'Successful response with a welcome message.' }) // Response description
  getHello(): string {
    return this.appService.getHello();
  }
}
