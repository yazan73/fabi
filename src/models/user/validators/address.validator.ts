import { Prisma } from '@prisma/client';


export function addressSelectValidator() {
  return Prisma.validator<Prisma.AddressSelect>()({
    id:true,
    name:true,
    city:true,
    country:true,
    description:true,
  });
}
