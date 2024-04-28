import { Injectable } from '@nestjs/common';
import {  CreateJoinUsDto } from '../dto/create-join-us.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';


@Injectable()
export class JoinUsService {
  constructor(private prisma: PrismaService) {}

  async create(createJoinUs: CreateJoinUsDto) {
    console.log(createJoinUs)
    await this.prisma.joinUs.create({
      data:createJoinUs
    })
  }

  async findOne(id: number) {
    // return new CallUs();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async remove(id: number) {
    
  }
}
