import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddReviewDto {
    
    @ApiProperty({type:Number})
    @IsNumber()
    productId: number

    @ApiProperty({type:Number})
    @IsNumber()
    rate: number

    @ApiProperty({type:String})
    @IsString()
    description: string
}