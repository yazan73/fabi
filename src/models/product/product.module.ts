import { Module } from '@nestjs/common';
import { ProductController } from './userControllers/product.controller';
import { ProductService } from './userControllers/product.service';
import { ProductAdminController } from './adminControllers/product.admin.controller';
import { ProductAdminService } from './adminControllers/product.admin.service';

@Module({
  controllers: [ProductController,ProductAdminController],
  providers: [ProductService,ProductAdminService]
})
export class ProductModule {}
