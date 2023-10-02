import { Module } from '@nestjs/common';
import { HomeSliderController } from './controllers/home-slider.controller';
import { HomeSliderService } from './controllers/home-slider.service';

@Module({
  controllers: [HomeSliderController],
  providers: [HomeSliderService]
})
export class HomeSliderModule {}
