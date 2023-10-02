import { Module } from '@nestjs/common';
import { OfferController } from './controllers/offer.controller';
import { OfferService } from './controllers/offer.service';

@Module({
  controllers: [OfferController],
  providers: [OfferService]
})
export class OfferModule {}
