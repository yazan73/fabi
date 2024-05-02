import { PrismaService } from "../../src/common/prisma/services/prisma.service";

export async function productSeeder(prop:{prisma:PrismaService}){
    await prop.prisma.product.upsert({
        where:{
            id:1
        },
        update: {},
        create: {
            id:1,
            name: 'كنزة قطن',
            price: 500,
            wholesale: 200,
            brandId: 1,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 10,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "RED",
                        size: ['L',"M","XXXL"],
                        mediaId: 10
                    },
                    {
                        color: "BLUE",
                        size: ['L',"S","XXXL",'XXXXXL'],
                        mediaId: 10 
                    }
                ]
                }
            }
        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:2
        },
        update: {},
        create: {
            id:2,
            name: 'حذاء رسمي',
            price: 200,
            wholesale: 200,
            brandId: 2,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 11,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "YELLOW",
                        size: ['M',"XL","XXXL",'S'],
                        mediaId: 11
                    },
                    {
                        color: "BROWN",
                        size: ['M',"XL","XXXL",'S'],
                        mediaId: 11
                    },
                    {
                        color: "BLUE",
                        size: ['L',"S","XXXXL",'XXXXXL'],
                        mediaId: 11
                    }
                ]
                }
            
        }
    }
      })

      await prop.prisma.product.upsert({
        where:{
            id:3
        },
        update: {},
        create: {
            id:3,
            name: 'boots',
            price: 200,
            wholesale: 200,
            brandId: 3,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 12,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "BLACK",
                        size: ['M',"S","XXL"],
                        mediaId: 12
                    },
                    {
                        color: "WHITE",
                        size: ['L',"S","M","XXXL",'XXXXXL'],
                        mediaId: 12
                    }
                ]
                }
            }
        },
      })


      await prop.prisma.product.upsert({
        where:{
            id:3
        },
        update: {},
        create: {
            id:3,
            name: 'جينز',
            price: 200,
            wholesale: 200,
            brandId: 3,
            rate: 2,
            productCategoryId: 1,
            quantity: 90,
            mainPhotoId: 12,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "BLACK",
                        size: ['M',"S","XXL"],
                        mediaId: 12
                    },
                    {
                        color: "WHITE",
                        size: ['L',"S","M","XXXL",'XXXXXL'],
                        mediaId: 12
                    }
                ]
                }
            }
        },
      })
      
      await prop.prisma.product.upsert({
        where:{
            id:4
        },
        update: {},
        create: {
            id:4,
            name: 'تنورة قماش',
            price: 500,
            wholesale: 200,
            brandId: 1,
            rate: 2,
            productCategoryId: 2,
            quantity: 90,
            mainPhotoId: 13,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "RED",
                        size: ['L',"M","XL",'S'],
                        mediaId: 13
                    },
                    {
                        color: "PINK",
                        size: ['L',"S","XXXL",'XXXXXL','M'],
                        mediaId: 13 
                    },
                    {
                        color: "GREEN",
                        size: ['L',"S",'M'],
                        mediaId: 13 
                    }
                ]
                }
            }
        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:5
        },
        update: {},
        create: {
            id:5,
            name: 'كندرة جلد',
            price: 200,
            wholesale: 200,
            brandId: 4,
            rate: 2,
            productCategoryId: 2,
            quantity: 90,
            mainPhotoId: 14,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "RED",
                        size: ['L',"S","XXXL"],
                        mediaId: 14
                    },
                    {
                        color: "LIGHTBLUE",
                        size: ['L',"S",'XXXXXL'],
                        mediaId: 14
                    }
                ]
                }
            }

        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:6
        },
        update: {},
        create: {
            id:6,
            name: 'جزدان',
            price: 200,
            wholesale: 200,
            brandId: 3,
            rate: 2,
            productCategoryId: 2,
            quantity: 90,
            mainPhotoId: 15,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "YELLOW",
                        size: ['L',"M","XXXL"],
                        mediaId: 15
                    },
                    {
                        color: "BLUE",
                        size: ['L',"S","XXXL",'XXXXXL'],
                        mediaId: 15
                    }
                ]
                }
            }
        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:7
        },
        update: {},
        create: {
            id:7,
            name: 'فستان',
            price: 500,
            wholesale: 200,
            brandId: 5,
            rate: 2,
            productCategoryId: 3,
            quantity: 90,
            mainPhotoId: 16,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "YELLOW",
                        size: ['L',"M","XXXL"],
                        mediaId: 16
                    },
                    {
                        color: "BLUE",
                        size: ['L',"S","XXXL",'XXXXXL'],
                        mediaId: 16
                    }
                ]
                }
            }
        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:8
        },
        update: {},
        create: {
            id:8,
            name: 'بوط',
            price: 200,
            wholesale: 200,
            brandId: 2,
            rate: 2,
            productCategoryId: 3,
            quantity: 90,
            mainPhotoId: 17,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "YELLOW",
                        size: ['L',"M","XXXL"],
                        mediaId: 17
                    },
                    {
                        color: "BLUE",
                        size: ['L',"S","XXXL",'XXXXXL'],
                        mediaId: 17
                    }
                ]
                }
            }

        },
      })

      await prop.prisma.product.upsert({
        where:{
            id:9
        },
        update: {},
        create: {
            id:9,
            name: 'طاقية',
            price: 200,
            wholesale: 200,
            brandId: 6,
            rate: 2,
            productCategoryId: 3,
            quantity: 90,
            mainPhotoId: 18,
            productDetails:{
                createMany:{
                    data:[
                    {
                        color: "YELLOW",
                        size: ['L',"M","XXXL"],
                        mediaId: 18
                    },
                    {
                        color: "BLUE",
                        size: ['L',"S","XXXL",'XXXXXL'],
                        mediaId: 18
                    }
                ]
                }
            }
        },
      })
}