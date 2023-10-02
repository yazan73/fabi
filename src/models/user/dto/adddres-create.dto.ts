import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateAddress {
    
    @ApiProperty({type:String})
    @IsString()
    name:string
    @ApiProperty({type:String})
    @IsString()
    city:string
    @ApiProperty({type:String})
    @IsString()
    country:string
    @ApiProperty({type:String})
    @IsString()
    description:string
} 