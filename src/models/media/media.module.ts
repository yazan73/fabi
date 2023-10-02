import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';

import { MediaController } from './controllers/media.controller';
import { MediaService } from './controllers/media.service';
import { mediaFactory } from 'src/common/utilities/media.factory';

@Module({
  imports: [
    ConfigModule,
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: mediaFactory,
      inject: [ConfigService],
    }),
  ],
  controllers: [MediaController],
  providers: [MediaService, JwtService],
  exports: [MediaService],
})
export class MediaModule {}
