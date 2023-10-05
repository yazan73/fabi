import { PrismaService } from "../../src/common/prisma/services/prisma.service";

export async function categorySeeder(prop:{prisma:PrismaService}){
    await prop.prisma.productCategory.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            name: 'رجالي',
            iconId: 1,
        },
    })

    await prop.prisma.productCategory.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            name: 'نسائي',
            iconId: 8,
        },
    })

    await prop.prisma.productCategory.upsert({
        where:{
            id:3
        },
        update: {},
        create: {
            id:3,
            name: 'ولادي',
            iconId: 9,
        },
    })
      
}