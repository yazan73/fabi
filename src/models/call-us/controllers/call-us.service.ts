import { Injectable } from '@nestjs/common';
import { CreateCallUsDto } from '../dto/create-call-us.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';


@Injectable()
export class CallUsService {
  constructor(private prisma: PrismaService) {}

  async create(createCallUs: CreateCallUsDto) {
    await this.prisma.callUs.create({
      data:createCallUs
    })
  }

  async findOne(id: number) {
    // return new CallUs();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async remove(id: number) {
    
  }
}
