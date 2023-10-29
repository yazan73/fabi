import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { productSelectValidator } from '../validators/product.select.validator';
import { Pagination } from 'src/common/dtos/pagination.dto';
import { ProductFiltersKeys } from '../dto/productByFilters.dto';
import { User } from 'src/common/entities/user.entity';
import { Product } from '../dto/product.dto';

@Injectable()
export class ProductAdminService {
  constructor(private prisma: PrismaService) {}

  async getProducts(prop: { pagination: Pagination }) {
    return (
      await this.prisma.product.findMany({
        where: {
          isNew: true,
        },
        select: productSelectValidator(),
        skip: prop.pagination.skip,
        take: prop.pagination.limit,
      })
    ).map((product) => new Product(product));
  }

  async getProductById(prop: { productId: number }) {
    return new Product (  await this.prisma.product.findFirst({
      where: {
        id: prop.productId,
      },
      select: productSelectValidator(),
    }));
  }


}
