import { Controller, Post } from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('')
  async create () {
    
  }
}
