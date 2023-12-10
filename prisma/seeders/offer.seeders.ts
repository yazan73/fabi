import { Gender } from "@prisma/client";
import { PrismaService } from "../../src/common/prisma/services/prisma.service";
import { PasswordService } from "../../src/models/auth/services/password.service";

export async function offerSeeder(prop:{prisma:PrismaService}){
    await prop.prisma.offer.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            name: 'عرض الشتاء',
            expiryDate: new Date('2024-02-01'),
            percentOffer: 15,
            products:{
                connect:[{id:1,},{id:2},{id:3},{id:8}]
            },
            brandId:2
        },
      })

      await prop.prisma.offer.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            name: 'عرض خاص',
            expiryDate: new Date('2024-02-01'),
            percentOffer: 20,
            products:{
                connect:[{id:4,},{id:6},{id:7}]
            }
        },
      })
   
}