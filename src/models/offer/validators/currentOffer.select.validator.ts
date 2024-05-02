import { Prisma } from '@prisma/client';
import { selectMediaValidator } from 'src/models/media/validators/select-media.validator';
import { productSelectValidator } from 'src/models/product/validators/product.select.validator';


export function currentOfferSelectValidator() {
  return Prisma.validator<Prisma.OfferSelect>()({
    id:true,
    name:true,
    description:true,
    expiryDate:true,
    percentOffer: true,
    products: {
        select: {...productSelectValidator()}
    }
  });
}
