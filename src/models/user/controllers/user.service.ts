import { Injectable } from '@nestjs/common';
import { UserProfile } from '../dto/profile.dto';
import { UpdateUserDto } from '../dto/user.update.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { profileSelectValidator } from '../validators/profileSelect.validator';
import { addressSelectValidator } from '../validators/address.validator';
import { CreateAddress } from '../dto/adddres-create.dto';

@Injectable()
export class UserService {

    constructor(private prisma:PrismaService){
    }
  
    async profile(userId:number):Promise<UserProfile>{
        return this.prisma.user.findFirst({
            where:{
                id:userId
            },
            select:profileSelectValidator()
        }).then(user=>{
            return new UserProfile(user)
        })
    }

    async update(args: {userId:number,updateUserDto:UpdateUserDto}):Promise<UserProfile>{
        await this.prisma.user.update({
            where:{
                id:args.userId
            },
            data:{
                name: args.updateUserDto.name,
                lastName: args.updateUserDto.lastName,
                birthday: args.updateUserDto.birthday,
                gender: args.updateUserDto.gender,
                phone: args.updateUserDto.phone
            }
        })
        
        return await this.profile(args.userId)
    }

    async getAddress(userId:number){
        return await this.prisma.address.findMany({
            where:{
                user:{
                    id: userId
                }
            },
            select: addressSelectValidator()
        })
    }

    async createAddress(prop:{userId:number,createAddress:CreateAddress}){
        await this.prisma.address.create({
            data:{
                city: prop.createAddress.city ,
                country: prop.createAddress.city,
                name: prop.createAddress.city, 
                description: prop.createAddress.city,
                user:{
                    connect:{
                        id :prop.userId
                    }
                }
            }
        })
    }
}
