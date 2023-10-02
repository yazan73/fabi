import { PrismaService } from "../../src/common/prisma/services/prisma.service";

export async function productSeeder(prop:{prisma:PrismaService}){
    await prop.prisma.product.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            name: 'noura',
            price: 200,
            wholesale: 200,
            brandId: 1,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 1
        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            name: 'noura2',
            price: 200,
            wholesale: 200,
            brandId: 1,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 1

        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:3
        },
        update: {},
        create: {
            id:3,
            name: 'noura3',
            price: 200,
            wholesale: 200,
            brandId: 1,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 1
        },
      })
      
}