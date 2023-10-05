import { MediaType } from "@prisma/client";
import { PrismaService } from "../../src/common/prisma/services/prisma.service";

export async function mediaSeeder(prop:{prisma:PrismaService}){
    //رجالي
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
            url: 'https://gdurl.com/ZzX1'
        },
      })
      
      // adidas
      await prop.prisma.media.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/w56s'
        },
      })
      
      // LC Wakiki
      await prop.prisma.media.upsert({
        where:{
            id:3
        },
        update: {},
        create: {
            id:3,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/AyG7'
        },
      })

      //diadora
      await prop.prisma.media.upsert({
        where:{
            id:4
        },
        update: {},
        create: {
            id:4,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/12qB'
        },
      })

      //dior
      await prop.prisma.media.upsert({
        where:{
            id:5
        },
        update: {},
        create: {
            id:5,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/yyne'
        },
      })

      //zara
      await prop.prisma.media.upsert({
        where:{
            id:6
        },
        update: {},
        create: {
            id:6,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/OGwR'
        },
      })

      //DD&G
      await prop.prisma.media.upsert({
        where:{
            id:7
        },
        update: {},
        create: {
            id:7,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/w6Cm'
        },
      })

      //نسائي
      await prop.prisma.media.upsert({
        where:{
            id:8
        },
        update: {},
        create: {
            id:8,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/TdV0'
        },
      })
    
    // ولادي
    await prop.prisma.media.upsert({
        where:{
            id:9
        },
        update: {},
        create: {
            id:9,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/kg-I'
        },
      })
    
    //t-shirt
    await prop.prisma.media.upsert({
        where:{
            id:10
        },
        update: {},
        create: {
            id:10,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/5Xpo'
        },
      })
    
      //chose
      await prop.prisma.media.upsert({
        where:{
            id:11
        },
        update: {},
        create: {
            id:11,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/tgks'
        },
      })

      //janes
      await prop.prisma.media.upsert({
        where:{
            id:12
        },
        update: {},
        create: {
            id:12,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/ZK5B'
        },
      })
    
      //skirt
      await prop.prisma.media.upsert({
        where:{
            id:13
        },
        update: {},
        create: {
            id:13,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/oyaS'
        },
      })
    
      // كندا
      await prop.prisma.media.upsert({
        where:{
            id:14
        },
        update: {},
        create: {
            id:14,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/snae'
        },
      })
    
      //شنتة
      await prop.prisma.media.upsert({
        where:{
            id:15
        },
        update: {},
        create: {
            id:15,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/XCRN'
        },
      })

      //dress 
      await prop.prisma.media.upsert({
        where:{
            id:16
        },
        update: {},
        create: {
            id:16,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/Xc7QU'
        },
      })
    
    //بوط
    await prop.prisma.media.upsert({
        where:{
            id:17
        },
        update: {},
        create: {
            id:17,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/m0ny'
        },
      })
    
    // طاقية
    await prop.prisma.media.upsert({
        where:{
            id:18
        },
        update: {},
        create: {
            id:18,
            type: MediaType.IMAGE,
            size: 200,
            userId:1,
            url: 'https://gdurl.com/XT6Mi'
        },
      })
    
    
}
