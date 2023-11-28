import { Prisma } from '@prisma/client';
import { productCartSelectValidator } from './productCart.select.validator';
import { addressSelectValidator } from 'src/models/user/validators/address.validator';


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


export function allCartSelectValidator() {
  return Prisma.validator<Prisma.CartSelect>()({
    id:true,
    number: true,
    createdAt: true,
    status: true,
    totalPrice: true,
    deliveryCost: true,
    address: {
      select: addressSelectValidator()
    },
    productCarts: {
      select: productCartSelectValidator()
    }
});
}