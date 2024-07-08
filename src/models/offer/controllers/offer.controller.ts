import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';
import { ApiTags } from '@nestjs/swagger';
import { CreateOfferDto, CreateOfferDtoBody } from '../dto/create-offer.dto';


@AllowUnAuthorizedRequest()
@ApiTags('Offer')
@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get('current')
  async getCurrentOffer (){
    return await this.offerService.getCurrentOffers()
  }

  
  @Get('newest')
  async getNewestOffer (){
    return await this.offerService.getNewestOffer()
  }

  @Get()
  async getAllOffers (){
    return await this.offerService.getAllOffers()
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.offerService.deleteOffer(+id)
  }
  @Post()
  async createOffer(@Body() createOfferDto:CreateOfferDtoBody){
    const body={
      ...createOfferDto,
      expiryDate:new Date(createOfferDto.expiryDate)
    }as CreateOfferDto
    await this.offerService.createOffer(body);
  }
}
