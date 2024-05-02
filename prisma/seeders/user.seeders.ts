import { Gender } from "@prisma/client";
import { PrismaService } from "../../src/common/prisma/services/prisma.service";
import { PasswordService } from "../../src/models/auth/services/password.service";

export async function userSeeder(prop:{prisma:PrismaService,passwordService:PasswordService}){
    await prop.prisma.user.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            birthday: new Date(),
            gender: Gender.MALE,
            name: 'Kareem',
            phone: '09223131',
            emailCredential:{
              create:{
                email: 'kareem@fabi.com',
                password: await prop.passwordService.hash('password')
              }
            },
            Address:{
               create:{
                city: 'دمشق',
                country: 'سوريا',
                name: 'منزل',
                description: 'جسر الابيض - جامع جسر الابيض',
                deliveryCost: 12500
               }
            }
        },
      })


      await prop.prisma.user.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            birthday: new Date(),
            gender: Gender.MALE,
            name: 'yazan',
            phone: '09223131',
            emailCredential:{
              create:{
                email: 'yazan@fabi.com',
                password: await prop.passwordService.hash('password')
              }
            },
            Address:{
               create:{
                city: 'دمشق',
                country: 'سوريا',
                name: 'منزل',
                description: 'ببيلا - جامع الكريم',
                deliveryCost: 30000
               }
            }
        },
      })
      
}