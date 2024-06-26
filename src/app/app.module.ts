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
import { CartModule } from 'src/models/cart/cart.module';
import { OfferModule } from 'src/models/offer/offer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CallUsModule } from 'src/models/call-us/call-us.module';
import { ProductReviewModule } from 'src/models/product-review/product-review.module';
import { WholesaleRequestModule } from 'src/models/wholesale-request/wholesale-request.module';
import { AffiliateMarketingModule } from 'src/models/affiliate-marketing/affiliate-marketing.module';
import { JoinUsModule } from 'src/models/join-us/join-us.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: './public',
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot(),
    BrandModule,
    ProductModule,
    HomeSliderModule,
    MediaModule,
    CategoryModule,
    CartModule,
    CallUsModule,
    OfferModule,
    ProductReviewModule,
    WholesaleRequestModule,
    AffiliateMarketingModule,
    JoinUsModule,
    OfferModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
