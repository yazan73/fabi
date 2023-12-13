import { Prisma } from '@prisma/client';
import { currentOfferSelectValidator } from 'src/models/offer/validators/currentOffer.select.validator';
import { productSelectValidator } from 'src/models/product/validators/product.select.validator';


export function BrandSelectValidator() {
  return Prisma.validator<Prisma.BrandSelect>()({
    id:true,
    name:true,
    logo:true,
    offers:{
      select: currentOfferSelectValidator()
    },
    products:{
      select:{...productSelectValidator(), productCategoryId:true},
      skip:0,
      take:50
    },
  });
}
