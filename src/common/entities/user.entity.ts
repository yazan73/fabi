import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsEnum, IsNumber, IsOptional, IsString, Length } from "class-validator"
import { Gender } from "../enums/gender.enum"
import { Type } from "class-transformer"

export class User {
    @ApiProperty({type:Number, default: 1 })
    @IsNumber()
    id:number  

    @ApiProperty({type:String, default:'Ahmad'})
    @IsString()
    @Length(3,15)
    name: string

    @ApiProperty({type:String, default:'Food'})
    @IsString()
    @Length(3,15)
    @IsOptional()
    lastName?:string

    @ApiProperty({enum:Gender,default:Gender.MALE})
    @IsEnum(Gender)
    gender: Gender

    @ApiProperty({type:String, default:'963912343533'})
    @IsString()
    @Length(12,12)
    phone:string

    
    @ApiProperty({type:Date})
    @IsDate()
    @Type(()=>Date)
    birthday:Date

    @ApiProperty({type:Number, default:2.4})
    @IsNumber()
    rate?:number | null

    constructor(user){
        this.id = user.id
        this.name = user.name
        this.lastName = user.lastName
        this.gender = user.gender
        this.phone = user.phone
        this.birthday = user.birthday
    }
}