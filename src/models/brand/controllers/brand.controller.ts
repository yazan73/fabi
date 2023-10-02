import { Controller, Get, Param } from '@nestjs/common';
import { BrandService } from './brand.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { server } from 'typescript';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

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
}
