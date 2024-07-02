// product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsInt, IsBoolean, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Name of the product', example: 'Super Gadget' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Description of the product', example: 'Latest tech gadget', required: false })
  description?: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @ApiProperty({ description: 'Quantity in stock', example: 100 })
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'Wholesale price of the product', example: 299.99 })
  wholesale: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'Retail price of the product', example: 499.99 })
  price: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'ID of the brand', example: 1 })
  brandId: number;

  // Add other properties similarly...

  // @IsOptional()
  // @IsNumber()
  // @ApiProperty({ description: 'Rating of the product', example: 4.5, required: false })
  // rate?: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ description: 'Is the product new', example: true })
  isNew: boolean;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ description: 'ID of the product category', example: 2 })
  productCategoryId: number;
  //drop Down

  @IsOptional()
  @IsInt()
  @ApiProperty({ description: 'ID of the main photo', example: 1, required: false })
  mainPhotoId?: number;
  //uploading photo 
  

  // Assuming you have a separate DTO for ProductDetails, ProductGallery, etc.
}
// export class CreateProductDto {
//     name: string;
//     description?: string;
//     quantity: number;
//     wholesale: number;
//     price: number;
//     brandId: number;
//     mainPhotoId?: number;
//     productCategoryId: number;
//     rate?: number;
//     isNew?: boolean;
//   }
  
  export class UpdateProductDto {
    name?: string;
    description?: string;
    quantity?: number;
    wholesale?: number;
    price?: number;
    brandId?: number;
    mainPhotoId?: number;
    productCategoryId?: number;
    rate?: number;
    isNew?: boolean;
  }