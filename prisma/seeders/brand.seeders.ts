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
            logoId:7,
        },
      })
    await prop.prisma.brand.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            name: 'Adidas',
            logoId:2,
        },
      })

      await prop.prisma.brand.upsert({
        where:{
            id:3
        },
        update: {},
        create: {
            id:3,
            name: 'LC Wakiki',
            logoId:2,
        },
      })

      await prop.prisma.brand.upsert({
        where:{
            id:4
        },
        update: {},
        create: {
            id:4,
            name: 'Diadora',
            logoId:4,
        },
      })

      await prop.prisma.brand.upsert({
        where:{
            id:5
        },
        update: {},
        create: {
            id:5,
            name: 'Dior',
            logoId:5,
        },
      })

      await prop.prisma.brand.upsert({
        where:{
            id:6
        },
        update: {},
        create: {
            id:6,
            name: 'Zara',
            logoId:6,
        },
      })
}