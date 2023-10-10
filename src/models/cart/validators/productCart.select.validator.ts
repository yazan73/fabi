import { Prisma } from '@prisma/client';
import { productSelectValidator } from 'src/models/product/validators/product.select.validator';


export function productCartSelectValidator() {
  return Prisma.validator<Prisma.ProductCartSelect>()({
    id:true,
    product:{
      select: productSelectValidator()
    },
    color: true,
    size: true,
    quantity: true,
    productPrice:true
  });
}
