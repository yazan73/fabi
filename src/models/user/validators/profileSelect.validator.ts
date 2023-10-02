import { Prisma } from '@prisma/client';


export function profileSelectValidator() {
  return Prisma.validator<Prisma.UserSelect>()({
    id:true,
    name:true,
    lastName:true,
    birthday:true,
    gender:true,
    phone:true,
    emailCredential:{
        select:{
            email:true
        }
    },
    profileImage:{
        select:{
            media:{
                select:{
                    id:true,
                    size:true,
                    url:true,
                    type:true
                }
            }
        }
    }
  });
}
