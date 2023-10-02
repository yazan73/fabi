import { ApiProperty } from "@nestjs/swagger"
import { MediaType } from "@prisma/client"
import { IsEnum, IsNumber, IsString } from "class-validator"

export class MediaEntity {
    @ApiProperty({type:Number, default: 1 })
    @IsNumber()
    id    : number
    
    @ApiProperty({type:Number, default: 1 })
    @IsNumber()
    userId: number

    @ApiProperty({enum:MediaType,default:MediaType.IMAGE})
    @IsEnum(MediaType)
    type  : MediaType

    @ApiProperty({type:Number, default: 1 })
    @IsNumber()
    size  : number

    @ApiProperty({type:String, default: "" })
    @IsString()
    url   : string
}