import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomeSliderService } from './home-slider.service';
import { CreateHomeSliderDto } from '../dto/create-home-slider.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth()
@ApiTags("Home Slider")
@Controller('home-slider')
export class HomeSliderController {
  constructor(private readonly homeSliderService: HomeSliderService) {}

  @Post()
  create(@Body() createHomeSliderDto: CreateHomeSliderDto) {
    return this.homeSliderService.create(createHomeSliderDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeSliderService.remove(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeSliderService.findOne(+id);
  }
}
