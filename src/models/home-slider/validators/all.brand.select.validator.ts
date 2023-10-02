import { Prisma } from '@prisma/client';
import { productSelectValidator } from 'src/models/product/validators/product.select.validator';


export function HomeSliderSelectValidator() {
  return Prisma.validator<Prisma.HomeSliderSelect>()({
    id:true,
    title:true,
    subTitle:true,
    buttonContent:true,
    media:{
      select:{
        url:true
      }
    }
  });
}
