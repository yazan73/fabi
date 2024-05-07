import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { productSelectValidator, productWithReviewSelectValidator } from '../validators/product.select.validator';
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
      select: productWithReviewSelectValidator(),
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
      console.log(result)
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
  async deleteFavored(prop: { user: User; productId: number }) {
    await this.prisma.productFavored.deleteMany({
      where: {
        userId: prop.user.id,
        productId: prop.productId,

      },
    });
  }
  async getFavoredByProductId(prop: { user: User; productId: number }){
    return await this.prisma.productFavored.findFirst({
      where: {
        userId: prop.user.id,
        productId: prop.productId,
      },
    })
  }

  async getByCategory(categoryId: number){
    return await this.prisma.product.findMany({
      where:{
        productCategoryId: categoryId
      },
      select: productSelectValidator()
    })
  }

  async getByCategoryAndBrandId(categoryId: number,brandId:number){
    return this.prisma.product.findMany({
      where:{
        AND:[{
          productCategoryId: categoryId
        },
        {
          brandId: brandId
        }
      ]
        
      },
      select: productSelectValidator()
    }).then(products =>  products.map(product => new Product(product)))
  }

  mostSellingProducts() {
    return this.prisma.productCart.findMany({
      distinct: 'productId' ,
      select:{
        product:{ select:productSelectValidator()}
      },
      skip: 0,
      take: 50,
    }).then(result => result.map(element => new Product(element.product)) )
  }

  search(key:string) {
    return this.prisma.product.findMany({
      where:{
        OR:[
          {name: {contains: key}},
          {description: {contains: key}},
          {productCategory :{name:{contains:key}}},
        ]
      },
      select:productSelectValidator(),
    }).then(result => result.map(element => new Product(element)) )
  }
}
