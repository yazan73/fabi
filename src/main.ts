import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './common/prisma/services/prisma.service';
import { swagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true
    }),
  );

  swagger(app);

  app.get(PrismaService).enableShutdownHooks(app);
  const config = app.get(ConfigService);
  const PORT = config.get('PORT') ? config.get('PORT') : 3000;
  Logger.log(`Fabi Backend Started on port: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
