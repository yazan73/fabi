import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CallUsService } from './call-us.service';
import { CreateCallUsDto } from '../dto/create-call-us.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';

// @ApiBearerAuth()
@AllowUnAuthorizedRequest()
@ApiTags('Call Us')
@Controller('call-us')
export class CallUsController {
  constructor(private readonly callUsService: CallUsService) {}
  
  @AllowUnAuthorizedRequest()
  @ApiBearerAuth()
  @Post()
  async create(@Body() createCallUsDto: CreateCallUsDto) {
    try {
      console.log(createCallUsDto)
      await this.callUsService.create(createCallUsDto);
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
