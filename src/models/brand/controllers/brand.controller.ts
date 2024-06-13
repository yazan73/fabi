import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BrandService } from './brand.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { server } from 'typescript';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';
import { Brand as BrandModel } from '@prisma/client';
import { CreateBrandDto, UpdateBrandDto } from '../dto/brand.dto';
@ApiTags('Brand')
// @ApiBearerAuth()
@AllowUnAuthorizedRequest()

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get('all')
  async getAllBrand(){
    return await this.brandService.getAllBrands()
  }
  
  @Get(':id')
  async getBrandWithProducts(@Param('id') id:string){
    return await this.brandService.getBrandWithProducts(+id)
  }
  //dashboard 

  @Post()
  create(@Body() brandData: CreateBrandDto): Promise<BrandModel> {
    return this.brandService.create(brandData);
  }

  // @Get()
  // findAll(): Promise<BrandModel[]> {
  //   return this.brandService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BrandModel> {
    return this.brandService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() brandData: UpdateBrandDto): Promise<BrandModel> {
    return this.brandService.update(+id, brandData);
  }

  @AllowUnAuthorizedRequest()
  @Delete(':id')
  remove(@Param('id') id: string): Promise<BrandModel> {
    return this.brandService.remove(+id);
  }
}
