import { Module } from '@nestjs/common';
import { JoinUsController } from './controllers/join-us.controller';
import { JoinUsService } from './controllers/join-us.service';

@Module({
  controllers: [JoinUsController],
  providers: [JoinUsService]
})
export class JoinUsModule {}
