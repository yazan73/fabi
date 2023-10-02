import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './controllers/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
