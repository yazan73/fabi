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
    return await this.prisma.joinUs.findFirst({
      where:{id}
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async remove(id: number) {
    return await this.prisma.joinUs.delete({where:{id}})
  }

  async getAll() {
    try {
      const allJoinUsRecords = await this.prisma.joinUs.findMany({
        select: {
          id: true,
          brandName: true,
          brandOwnerName: true,
          phone: true,
          branchNumber: true,
          address: true,
          // Add other fields you want to retrieve
        },
      });
  
      // Handle the retrieved records (e.g., return them or process further)
      return allJoinUsRecords;
    } catch (error) {
      // Handle any errors (e.g., log or throw)
      console.error('Error fetching joinUs records:', error);
      throw error;
    }
  }
  
}
