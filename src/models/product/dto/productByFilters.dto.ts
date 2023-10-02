import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";
import { Pagination } from "src/common/dtos/pagination.dto";

export class ProductFiltersKeys extends Pagination {

    @ApiProperty({type:Number,required:false})
    @IsNumber()
    @IsOptional()
    @Type(()=>Number)
    categoryId?: number | null

    @ApiProperty({type:Number,required:false})
    @IsNumber()
    @IsOptional()
    @Type(()=>Number)
    brandId?: number | null
}