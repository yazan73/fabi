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
            bio: 'Im here',
            emailCredential:{
              create:{
                email: 'kareem@fabi.com',
                password: await prop.passwordService.hash('password')
              }
            }
        },
      })
      
}