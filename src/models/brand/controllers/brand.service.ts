import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { BrandSelectValidator } from '../validators/all.brand.select.validator';
import { GeneralBrand } from '../dto/getAllBrand.dto';
import { BrandsSelectValidator } from '../validators/brand.select.validator copy';
import { Brand } from '../dto/brand.dto';

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
    return new Brand ( await this.prisma.brand.findFirst({
        where:{
            id:brandId
        },
        select:BrandSelectValidator()
    }))
  }
}
