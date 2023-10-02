import { ApiProperty } from "@nestjs/swagger";
import { Media } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";

export class GeneralBrand {
    @ApiProperty({type:Number})
    @IsNumber()
    id:number
    
    @ApiProperty({type:String})
    @IsString()
    name: string

    @ApiProperty({})
    logo: Media

    @ApiProperty({type:Number})
    productCount: number

    constructor(brand){
        this.id = brand.id
        this.name = brand.name 
        this.logo = brand.logo        
        this.productCount = brand?.products?.length || 0
    }
}