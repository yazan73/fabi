import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class LoginDto {
    @ApiProperty({type:String, default:'user@fabi.com'})
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty({type:String,default:'12345678'})
    @IsString()
    @Length(8, 120)
    password: string
}
