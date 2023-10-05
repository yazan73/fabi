import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { AuthModule } from 'src/models/auth/auth.module';
import { BrandModule } from 'src/models/brand/brand.module';
import { CategoryModule } from 'src/models/category/category.module';
import { HomeSliderModule } from 'src/models/home-slider/home-slider.module';
import { MediaModule } from 'src/models/media/media.module';
import { ProductModule } from 'src/models/product/product.module';
import { UserModule } from 'src/models/user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot(),
    BrandModule,
    ProductModule,
    HomeSliderModule,
    MediaModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
