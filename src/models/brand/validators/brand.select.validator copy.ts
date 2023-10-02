import { Prisma } from '@prisma/client';


export function BrandsSelectValidator() {
  return Prisma.validator<Prisma.BrandSelect>()({
    id:true,
    name:true,
    logo:true,
    products:{
       
    }
  });
}
