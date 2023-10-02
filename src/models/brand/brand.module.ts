import { Module } from '@nestjs/common';
import { BrandController } from './controllers/brand.controller';
import { BrandService } from './controllers/brand.service';

@Module({
  controllers: [BrandController],
  providers: [BrandService]
})
export class BrandModule {}
