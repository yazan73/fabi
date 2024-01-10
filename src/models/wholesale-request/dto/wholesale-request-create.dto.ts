import { ApiProperty } from "@nestjs/swagger"
import { WholesaleRequestType } from "@prisma/client"
import { IsEnum, IsNumber, IsString } from "class-validator"

export class WholesaleRequestDto {

    @ApiProperty({type:String})
    @IsString()
    brandName: string

    @ApiProperty({type:String})
    @IsString()
    brandNameOwnerName: string
    
    @ApiProperty({type:String})
    @IsString()
    address: string

    @ApiProperty({type:String})
    @IsString()
    phoneNumber: string

    @ApiProperty({type:Number})
    @IsNumber()
    branchesNumber: number

    @ApiProperty({enum:WholesaleRequestType})
    @IsEnum(WholesaleRequestType)
    type: WholesaleRequestType
}