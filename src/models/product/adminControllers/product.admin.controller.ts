import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ProductAdminService } from './product.admin.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { Pagination } from 'src/common/dtos/pagination.dto';
import { ProductFiltersKeys } from '../dto/productByFilters.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';
import { UserNotRequired } from 'src/models/auth/decorators/getUser.needless.decorator';

@AllowUnAuthorizedRequest()
@ApiTags('Admin Product')
@Controller('admin/product')
export class ProductAdminController {
  constructor(private readonly productService: ProductAdminService) {}

  @Get('')
  async getNewProduct(
     @Query() pagination:Pagination){
    return await this.productService.getProducts({pagination,
    })
  }
  
  @AllowUnAuthorizedRequest()
  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @AllowUnAuthorizedRequest()
  @Get()
  @ApiOperation({ summary: 'Get all products with pagination' })
  async findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.productService.findAll({ page, limit });
  }
  
  @AllowUnAuthorizedRequest()
  @Get(':id')
  @ApiOperation({ summary: 'Get a single product by id' })
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @AllowUnAuthorizedRequest()
  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @AllowUnAuthorizedRequest()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  async remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }

}
