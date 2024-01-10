import { Module } from '@nestjs/common';
import { WholesaleRequestService } from './wholesale-request.service';
import { WholesaleRequestController } from './wholesale-request.controller';

@Module({
  controllers: [WholesaleRequestController],
  providers: [WholesaleRequestService]
})
export class WholesaleRequestModule {}
