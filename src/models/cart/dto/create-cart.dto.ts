import { ApiProperty } from "@nestjs/swagger";
import { Size } from "@prisma/client";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";


export class ProductsInCart {
    @ApiProperty({type:Number})
    @IsNumber()
    productId: number

    @ApiProperty({type:Number})
    @IsNumber()
    quantity: number 
    
    @ApiProperty({enum:Size})
    @IsEnum(Size)
    @IsOptional()
    size?: Size

    @ApiProperty({ type: String})
    @IsString()
    @IsOptional()
    color?: string

    @ApiProperty({type: Number})
    @IsNumber()
    price: number
}


export class CreateCartDto {
    @ApiProperty({type:[ProductsInCart]})
    @Type(()=> ProductsInCart)
    @ValidateNested()
    @IsArray()
    products: ProductsInCart[]

    @ApiProperty({type:Number})
    @IsNumber()
    addressId: number
}
