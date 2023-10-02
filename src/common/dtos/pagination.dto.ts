import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class Pagination {
    
    @ApiProperty({type:Number,required:false})
    @IsNumber()
    @Type(()=>Number)
    @IsOptional()
    skip?: number | null

    @ApiProperty({type:Number,required:false})
    @IsNumber()
    @IsOptional()
    @Type(()=>Number)
    limit?: number | null
}