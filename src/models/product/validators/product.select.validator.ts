import { Prisma } from '@prisma/client';
import { selectMediaValidator } from 'src/models/media/validators/select-media.validator';


export function productSelectValidator() {
  return Prisma.validator<Prisma.ProductSelect>()({
    id:true,
    name:true,
    description:true,
    quantity:true,
    wholesale:true,
    price:true,
    rate:true,
    brand:{
        select:{
            name:true,
            logo:true
        }
    },
    mainPhoto:{
        select: selectMediaValidator()
    },
    productDetails:{
        select:{
            id:true,
            size:true,
            color:true,
            quantity:true,
            wholesale:true,
            price:true,
            media:{
                select: selectMediaValidator()
            }
        }
    },
    productGallery:{
        select:{
            media:{
                select:{
                    id:true,
                    size:true,
                    url:true,
                    type:true
                }
            }
        }
    },
    productCategory:{
        select:{
            name:true,
            icon:{
                select:{
                    id:true,
                    size:true,
                    url:true,
                    type:true
                }
            }
        }
    },
    offers:true
  });
}
