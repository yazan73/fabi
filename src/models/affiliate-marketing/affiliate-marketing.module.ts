import { Module } from '@nestjs/common';
import { AffiliateMarketingController } from './controllers/affiliate-marketing.controller';
import { AffiliateMarketingService } from './controllers/affiliate-marketing.service';

@Module({
  controllers: [AffiliateMarketingController],
  providers: [AffiliateMarketingService]
})
export class AffiliateMarketingModule {}
