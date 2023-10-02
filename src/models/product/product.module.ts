import { Module } from '@nestjs/common';
import { ProductController } from './userControllers/product.controller';
import { ProductService } from './userControllers/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
