import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Set the global prefix
  console.log('JWT_SECRET:', process.env.JWT_SECRET);
  const config = new DocumentBuilder()
    .setTitle('Loan System API')
    .setDescription('API documentation for the Loan System')
    .setVersion('1.0')
    .addBearerAuth() // Enable JWT authentication
    .build();
    

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Setup Swagger at /api-docs

  await app.listen(3000);
}
bootstrap();
