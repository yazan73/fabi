import { ApiProperty } from '@nestjs/swagger';
import { Media, Offer } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { groupByKey } from 'src/common/utilities/groupByKey';
import { ConvertObjectToArray } from 'src/common/utilities/objectToArray';
import { Product } from 'src/models/product/dto/product.dto';

export class BrandDTO {
  id: number;
  name: string;
  logo: Media;
  offers: Offer[];
  products: Product[];
  productByCategory: Product[][]

  constructor(brand) {
    this.id = brand.id;
    this.logo = brand.logo;
    this.name = brand.name;
    this.offers = brand.offers.map(offer => ({...offer , products: offer.products.map((product) => new Product(product)) }))
    this.products = brand.products.map((product) => new Product(product));
    this.productByCategory = ConvertObjectToArray( groupByKey(this.products,'productCategoryId',{}))
  }
}

export class CreateBrandDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Name of the brand', example: 'nike' })
  name: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'logo id , you can get it from the media', example: 1 })
  logoId: number;
}

export class UpdateBrandDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Name of the brand', example: 'nike' })
  name?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ description: 'logo id , you can get it from the media', example: 1 })
  logoId?: number;
}