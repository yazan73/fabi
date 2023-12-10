import { Prisma } from '@prisma/client';
import { productSelectValidator } from 'src/models/product/validators/product.select.validator';


export function BrandSelectValidator() {
  return Prisma.validator<Prisma.BrandSelect>()({
    id:true,
    name:true,
    logo:true,
    offers:{
      select:{
        id:true,
        name:true,
        description:true,
        products:{
          select:productSelectValidator()
        }
      }
    },
    products:{
      select:{...productSelectValidator(), productCategoryId:true},
      skip:0,
      take:50
    },
  });
}
