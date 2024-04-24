import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

@ApiTags('Product Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @Post()
  // create(@Body() createCategoryDto: CreateCategoryDto) {
  //   return this.categoryService.create(createCategoryDto);
  // }
  @AllowUnAuthorizedRequest()
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get('/:categoryId/brand/:brandId')
  async getCategoryWithBrandId(@Param('categoryId') categoryId:string, @Param('brandId') brandId:string ){
    return await this.categoryService.getCategoryWithBrandId(+categoryId,+brandId)
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoryService.remove(+id);
  // }
}
