import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateProductCategoryDto, UpdateCategoryDto, UpdateProductCategoryDto } from '../dto/update-category.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';

import { productCategorySelectValidator } from '../validators/product.select.validator';
import { BrandsSelectValidator } from 'src/models/brand/validators/brand.select.validator copy';
import { Prisma, ProductCategory } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategoryWithBrandId(categoryId:number, brandId:number) {
    const productCountInCategoryAndBrand =  (await this.prisma.product.aggregate({
      where: {
        AND:[
          {productCategoryId: categoryId},
          {brandId: brandId}
        ]
      },
      _count:{
        _all:true
      }
    }))._count

    const category = await this.prisma.productCategory.findFirst({where:{id:categoryId},select:productCategorySelectValidator()})
    const brand = await this.prisma.brand.findFirst({where:{id:brandId},select:BrandsSelectValidator()})

    return {category,brand, productCount:productCountInCategoryAndBrand._all}
  }

  async create(data: CreateProductCategoryDto): Promise<ProductCategory> {
    return this.prisma.productCategory.create({ data });
  }

  async findAll(): Promise<ProductCategory[]> {
    return this.prisma.productCategory.findMany();
  }

  async findOne(id: number): Promise<ProductCategory> {
    return this.prisma.productCategory.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateProductCategoryDto): Promise<ProductCategory> {
    return this.prisma.productCategory.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<ProductCategory> {
    return this.prisma.productCategory.delete({ where: { id } });
  }
}
