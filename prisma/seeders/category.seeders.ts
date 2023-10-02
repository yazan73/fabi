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
      
}