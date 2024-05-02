import { Controller, Post } from '@nestjs/common';
import { AffiliateMarketingService } from './affiliate-marketing.service';
import { ReqUser } from 'src/models/auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('affiliate-marketing')
export class AffiliateMarketingController {
  constructor(private readonly affiliateMarketingService: AffiliateMarketingService) {}

  @Post('code')
  async getOrGenerateCode(@ReqUser() user:User) {
    return await this.affiliateMarketingService.getOrGenerateCode(user)
  }
}
