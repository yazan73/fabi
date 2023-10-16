import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDate, IsNumber, IsString } from "class-validator";
import { Product } from "src/models/product/dto/product.dto";

export class currentOfferDto {
    
    @ApiProperty({type:Number})
    @IsNumber()
    id: number

    @ApiProperty({type: String})
    @IsString()
    name: string

    @ApiProperty({type: String})
    @IsString()
    description: string

    @ApiProperty({type:Number})
    @IsNumber()
    percentOffer: number


    @ApiProperty({type:Date})
    @IsDate()
    expiryDate: Date

    @ApiProperty({type:[Product]})
    @Type(()=> Product)
    @IsArray()
    products: Product[]

    constructor(offer){
        this.id = offer.id
        this.name = offer.name
        this.description = offer.description
        this.expiryDate = offer.expiryDate
        this.percentOffer = offer.percentOffer
        this.products = offer.products 
    }
    
}