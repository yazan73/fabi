import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { BrandSelectValidator } from '../validators/all.brand.select.validator';
import { GeneralBrand } from '../dto/getAllBrand.dto';
import { BrandsSelectValidator } from '../validators/brand.select.validator copy';
import { BrandDTO, CreateBrandDto } from '../dto/brand.dto';
import { Brand,Prisma } from '@prisma/client';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async getAllBrands() {
    return await this.prisma.brand
      .findMany({
        select: BrandsSelectValidator(),
      })
      .then((brands) =>
        brands.map((brand) => 
          new GeneralBrand(brand)
        ),
      );
  }

  async getBrandWithProducts (brandId:number){
    return new BrandDTO ( await this.prisma.brand.findFirst({
        where:{
            id:brandId
        },
        select:BrandSelectValidator(),
    }))
  }

  //dashboard functions 
  async create(data: CreateBrandDto): Promise<Brand> {
    return this.prisma.brand.create({ data });
  }

  async findAll(): Promise<Brand[]> {
    return this.prisma.brand.findMany();
  }

  async findOne(id: number): Promise<Brand> {
    return this.prisma.brand.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.BrandUpdateInput): Promise<Brand> {
    return this.prisma.brand.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Brand> {
    return this.prisma.brand.delete({ where: { id } });
  }

}
