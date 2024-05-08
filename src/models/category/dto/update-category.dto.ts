import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
export class CreateProductCategoryDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Name of the category', example: 'new category' })
    name: string;
  
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ description: 'icon ID you can get it from media', example: 1 })
    iconId: number;
  }
export class UpdateProductCategoryDto {
    @IsOptional()
    @IsString()
    @ApiProperty({ description: 'Name of the category', example: 'new category' })
    name?: string;
  
    @IsOptional()
    @IsInt()
    @ApiProperty({ description: 'icon ID you can get it from media', example: 1 })
    iconId?: number;
  }