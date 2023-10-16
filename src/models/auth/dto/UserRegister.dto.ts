import { ApiProperty } from "@nestjs/swagger"
import { Gender } from "@prisma/client"
import { IsDate, IsEmail, IsEnum, IsNumberString, IsOptional, IsString, Length } from "class-validator"
import { LoginDto } from "./login.dto"
import { Type } from "class-transformer"

export class UserRegister extends LoginDto {

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
    
    @ApiProperty({type:String, default:'I\'m Here to work'})
    @IsString()
    @Length(10,280)
    @IsOptional()
    bio?:string

    @ApiProperty({type:String, default:'963912343533'})
    @IsString()
    @IsNumberString()
    phone:string

    @ApiProperty({type:Date})
    @IsDate()
    @Type(()=>Date)
    birthday:Date


}