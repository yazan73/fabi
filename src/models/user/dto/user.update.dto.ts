import { ApiAcceptedResponse, ApiProperty } from "@nestjs/swagger"
import { IsDate, IsEmail, IsEnum, IsNumber, IsOptional, IsString, Length } from "class-validator"
import { Gender } from "../../../common/enums/gender.enum"
import { Type } from "class-transformer"

export class UpdateUserDto {
    
    @ApiProperty({type:String, default:'Ahmad'})
    @IsString()
    @Length(3,15)
    name:string
    
    @ApiProperty({type:String, default:'Food'})
    @IsString()
    @Length(3,15)
    @IsOptional()
    lastName?:string

    @ApiProperty({type:String})
    @IsEmail()
    @IsString()
    email: string
    
    @ApiProperty({enum:Gender,default:Gender.MALE})
    @IsEnum(Gender)
    gender: Gender
    
    @ApiProperty({type:Date})
    @IsDate()
    @Type(()=>Date)
    birthday:Date
    
    @ApiProperty({type:String, default:'963912343533'})
    @IsString()
    @Length(12,12)
    phone:string

    @ApiProperty({type:Number, required:false, default:'1'})
    @IsNumber()
    @IsOptional()
    mediaId?:number | undefined

}