import { Controller, Get, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { AllowUnAuthorizedRequest } from 'src/models/auth/guards/authentication.guard';
import { ApiTags } from '@nestjs/swagger';


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
}
