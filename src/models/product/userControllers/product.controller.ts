import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { Pagination } from 'src/common/dtos/pagination.dto';
import { ProductFiltersKeys } from '../dto/productByFilters.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';
import { UserNotRequired } from 'src/models/auth/decorators/getUser.needless.decorator';

@ApiTags('User Product')
@Controller('user/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  



//other functionality 

  @AllowUnAuthorizedRequest()
  @Get('search/:key')
  async search(@Param('key') key:string){
    return await this.productService.search(key)
  }
  @AllowUnAuthorizedRequest()
  @Get('most-selling')
  async getMostSelling(){
    return await this.productService.mostSellingProducts()
  }

  
  
  @AllowUnAuthorizedRequest()
  @Get('filter')
  async getProductByParams(@Query() productFiltersKeys:ProductFiltersKeys){
    return await this.productService.getFilteredProducts({productFiltersKeys})
  }

  @ApiBearerAuth()
  @Get('favored')
  async favored(@ReqUser() user:User,@Query() pagination:Pagination){
    const product=await this.productService.productsFavored({userId:user.id,pagination})
    console.log("lllllllllll", product)
    return product
  }


  @AllowUnAuthorizedRequest()
  @ApiBearerAuth()
  @Get('new')
  async getNewProduct(
    @UserNotRequired() user: User,
     @Query() pagination:Pagination){
    return await this.productService.getNewProducts({pagination,
      user
    })
  }
  
  @AllowUnAuthorizedRequest()
  @Get(':id')
  async getProductById(@Param('id') id: string){
      return await this.productService.getProductById({productId:+id})
  }

  @AllowUnAuthorizedRequest()
  @Get('byRate')
  async getProductByRate(@Query() pagination:Pagination){
      return await this.productService.getProductByRate(pagination)
  }

  @ApiBearerAuth() 
  @Post('makeFavored/:productId')
  async makeFavored(@ReqUser() user:User,@Param('productId') productId:string){
    await this.productService.makeFavored({productId: +productId,user}) 
  }

  @ApiBearerAuth() 
  @Delete('deleteFavored/:productId')
  async deleteFromFavored(@ReqUser() user:User,@Param('productId') productId:string){
    await this.productService.deleteFavored({productId: +productId,user}) 
  }
  @ApiBearerAuth() 
  @Get('getFavored/:productId')
  async getFavoredByProductId(@ReqUser() user:User,@Param('productId') productId:string){
    return await this.productService.getFavoredByProductId({productId: +productId,user}) 
  }

  @AllowUnAuthorizedRequest()
  @Get('byCategory/:categoryId')
  async getByCategory(@Param('categoryId') categoryId: string) {
    return await this.productService.getByCategory(+categoryId)
  }

  @AllowUnAuthorizedRequest()
  @Get('category/:categoryId/brand/:brandId')
  async getByCategoryAndBrand(@Param('categoryId') categoryId: string,@Param('brandId') brandId: string) {
    return await this.productService.getByCategoryAndBrandId(+categoryId,+brandId)
  }

}
