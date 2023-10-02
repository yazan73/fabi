import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { ProductCategory } from '../dto/category.dto';
import { productCategorySelectValidator } from '../validators/product.select.validator';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
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
