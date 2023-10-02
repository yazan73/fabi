import { Gender } from "@prisma/client";
import { PrismaService } from "../../src/common/prisma/services/prisma.service";
import { PasswordService } from "../../src/models/auth/services/password.service";

export async function brandSeeder(prop:{prisma:PrismaService}){
    await prop.prisma.brand.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            name: 'D&G',
            logoId:1,
        },
      })
      
}