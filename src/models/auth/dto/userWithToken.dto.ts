import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";
import { User } from "src/common/entities/user.entity";

export class UserWithToken {

    @ApiProperty({type:User})
    @Type(()=>User)
    @ValidateNested()
    user:User

    @ApiProperty({type:String})
    @IsString()
    token:string

    constructor(args:{user:User,token:string}){
        this.user = args.user
        this.token = args.token
    }
}