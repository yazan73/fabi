import { Prisma } from '@prisma/client';
import { productCartSelectValidator } from './productCart.select.validator';


export function cartSelectValidator() {
  return Prisma.validator<Prisma.CartSelect>()({
    id:true,
    number: true,
    createdAt: true,
    status: true,
    totalPrice: true,
    productCarts:{
      select: productCartSelectValidator()
    }
});
}
