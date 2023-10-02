import { MediaType } from "@prisma/client";
import { PrismaService } from "../../src/common/prisma/services/prisma.service";

export async function mediaSeeder(prop:{prisma:PrismaService}){
    await prop.prisma.media.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://cdn.dsmcdn.com/ty510/product/media/images/20220819/18/162952913/395709164/2/2_org_zoom.jpg'
        },
      })
      
}