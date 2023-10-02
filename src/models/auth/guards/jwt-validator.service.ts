import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/services/prisma.service';

@Injectable()
export class JwtValidatorService {
  constructor(private prisma:PrismaService
  ) {}

  async validate(payload: any) {
    const user = await this.prisma.user.findFirst({where:{id:payload.id}});

    if (!user) return null;

    return user;
  }
}
