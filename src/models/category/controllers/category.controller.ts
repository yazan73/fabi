import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductCategoryDto, UpdateCategoryDto, UpdateProductCategoryDto } from '../dto/update-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

@AllowUnAuthorizedRequest()
@ApiTags('Product Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @AllowUnAuthorizedRequest()
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get('/:categoryId/brand/:brandId')
  async getCategoryWithBrandId(@Param('categoryId') categoryId:string, @Param('brandId') brandId:string ){
    return await this.categoryService.getCategoryWithBrandId(+categoryId,+brandId)
  }

  @Post()
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.categoryService.create(createProductCategoryDto);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductCategoryDto: UpdateProductCategoryDto) {
    return this.categoryService.update(+id, updateProductCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
