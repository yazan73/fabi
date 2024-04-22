import { Module } from '@nestjs/common';
import { CallUsController } from './controllers/call-us.controller';
import { CallUsService } from './controllers/call-us.service';

@Module({
  controllers: [CallUsController],
  providers: [CallUsService]
})
export class CallUsModule {}
