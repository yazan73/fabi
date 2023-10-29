import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductAdminService } from './product.admin.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { Pagination } from 'src/common/dtos/pagination.dto';
import { ProductFiltersKeys } from '../dto/productByFilters.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
  
  
}
