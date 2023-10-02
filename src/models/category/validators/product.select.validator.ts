import { Prisma } from '@prisma/client';


export function productCategorySelectValidator() {
  return Prisma.validator<Prisma.ProductCategorySelect>()({
    id:true,
    name:true,
    icon: true
});
}
