import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { ProductCategory } from '../dto/category.dto';
import { productCategorySelectValidator } from '../validators/product.select.validator';
import { BrandsSelectValidator } from 'src/models/brand/validators/brand.select.validator copy';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategoryWithBrandId(categoryId:number, brandId:number) {
    let productCountInCategoryAndBrand =  (await this.prisma.product.aggregate({
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

    let category = await this.prisma.productCategory.findFirst({where:{id:categoryId},select:productCategorySelectValidator()})
    let brand = await this.prisma.brand.findFirst({where:{id:brandId},select:BrandsSelectValidator()})

    return {category,brand, productCount:productCountInCategoryAndBrand._all}
  }

  async findAll() {
    return (await this.prisma.productCategory.findMany({
      select:productCategorySelectValidator()
    })).map(
      (category) => new ProductCategory(category),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
