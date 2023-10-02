import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsEmail, IsString, ValidateNested } from "class-validator";
import { Media } from "@prisma/client";
import { MediaEntity } from "src/common/entities/media.entity";
import { User } from "src/common/entities/user.entity";

export class UserProfile extends User {

    @ApiProperty({type:() => MediaEntity})
    @Type(() => MediaEntity)
    @ValidateNested()
    profileImage:MediaEntity

    @ApiProperty({type:String})
    @IsString()
    @IsEmail()
    email:string

     constructor(user){
        console.log(user);
        super(user);
        
        this.email = user.emailCredential[0].email
        this.profileImage = user.profileImage
     }
}