import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { Pagination } from 'src/common/dtos/pagination.dto';
import { ProductFiltersKeys } from '../dto/productByFilters.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

@ApiTags('User Product')
// @ApiBearerAuth()
@AllowUnAuthorizedRequest()
@Controller('user/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @Get('filter')
  async getProductByParams(@Query() productFiltersKeys:ProductFiltersKeys){
    return await this.productService.getFilteredProducts({productFiltersKeys})
  }


  @Get('new')
  async getNewProduct(
    // @ReqUser() user: User,
     @Query() pagination:Pagination){
    return await this.productService.getNewProducts({pagination,
      // user
    })
  }
  
  @Get(':id')
  async getProductById(@Param('id') id: string){
      return await this.productService.getProductById({productId:+id})
  }

  @Get('byRate')
  async getProductByRate(@Query() pagination:Pagination){
      return await this.productService.getProductByRate(pagination)
  }

  @Post('makeFavored/:productId')
  async makeFavored(@ReqUser() user:User,@Param('productId') productId:string){
    await this.productService.makeFavored({productId: +productId,user}) 
  }

  @Get('favored')
  async favored(@ReqUser() user:User,@Query() pagination:Pagination){
    return await this.productService.productsFavored({userId:user.id,pagination})
  }

  @Get('byCategory/:categoryId')
  async getByCategory(@Param('categoryId') categoryId: string) {
    return await this.productService.getByCategory(+categoryId)
  }
}
