import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Sets a global prefix for API routes
  await app.listen(3000); // Runs on localhost:3000
}
bootstrap();
