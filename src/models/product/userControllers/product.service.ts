import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { productSelectValidator } from '../validators/product.select.validator';
import { Pagination } from 'src/common/dtos/pagination.dto';
import { ProductFiltersKeys } from '../dto/productByFilters.dto';
import { User } from 'src/common/entities/user.entity';
import { Product } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getNewProducts(prop: { pagination: Pagination, user:User }) {
    return (
      await this.prisma.product.findMany({
        where: {
          isNew: true,
        },
        select: productSelectValidator({userId:prop?.user?.id}),
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

  async getProductByRate(pagination?: Pagination) {
    return await this.prisma.product.findMany({
      orderBy: {
        rate: 'desc',
      },
      skip: pagination.skip,
      take: pagination.limit,
    });
  }

  async getFilteredProducts(prop: { productFiltersKeys: ProductFiltersKeys }) {
    return (await this.prisma.product.findMany({
      where: {
        AND: [
          {
            productCategory: {
              id: prop.productFiltersKeys.categoryId,
            },
          },
          {
            brand: {
              id: prop.productFiltersKeys.brandId,
            },
          },
        ],
      },
      select: productSelectValidator(),
      skip: prop.productFiltersKeys?.skip,
      take: prop.productFiltersKeys?.limit,
    })).map(product => new Product(product))
  }

  async productsFavored(prop: { userId: number; pagination: Pagination }) {
    return (
      await this.prisma.productFavored.findMany({
        where: {
          user: {
            id: prop.userId,
          },
        },
        select: {
          product: {
            select: productSelectValidator({userId:prop.userId}),
          },
        },
      })
    ).map((result) => {
      return result.product;
    });
  }

  async makeFavored(prop: { user: User; productId: number }) {
    await this.prisma.productFavored.create({
      data: {
        user: {
          connect: {
            id: prop.user.id,
          },
        },
        product: {
          connect: {
            id: prop.productId,
          },
        },
      },
    });
  }

  async getByCategory(categoryId: number){
    return await this.prisma.product.findMany({
      where:{
        productCategoryId: categoryId
      },
      select: productSelectValidator()
    })
  }
}
