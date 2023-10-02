import { Injectable } from '@nestjs/common';
import { CreateHomeSliderDto } from '../dto/create-home-slider.dto';
import { PrismaService } from 'src/common/prisma/services/prisma.service';
import { HomeSliderSelectValidator } from '../validators/all.brand.select.validator';
import { HomeSlider } from '../dto/get-home-slider.dto';

@Injectable()
export class HomeSliderService {
  constructor(private prisma: PrismaService) {}

  async create(createHomeSliderDto: CreateHomeSliderDto) {
    await this.prisma.homeSlider.create({
      data: createHomeSliderDto,
    });
  }

  async findOne(id: number) {
    return new HomeSlider( await this.prisma.homeSlider.findFirst({
      where: {
        id: id,
      },
      select: HomeSliderSelectValidator(),
    }));
  }

  async remove(id: number) {
    await this.prisma.homeSlider.delete({ where: { id: id } });
  }
}
