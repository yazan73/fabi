import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { JoinUsService } from './join-us.service';
import { CreateJoinUsDto } from '../dto/create-join-us.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Join Us')
@Controller('join-us')
export class JoinUsController {
  constructor(private readonly joinUsService: JoinUsService) {}
  
  @ApiBearerAuth()
  @Post()
  async create(@Body() createJoinUsDto: CreateJoinUsDto) {
    try {
      console.log(createJoinUsDto)
      await this.joinUsService.create(createJoinUsDto);
    } catch (error) {
      console.log(error)
    }
  }

  
  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  remove(@Param('id') id: string) {
   
  }

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  findOne(@Param('id') id: string) {
   
  }
}
