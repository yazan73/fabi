import { Body, Controller, Post } from '@nestjs/common';
import { WholesaleRequestService } from './wholesale-request.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { WholesaleRequestDto } from './dto/wholesale-request-create.dto';
import { ReqUser } from '../auth/decorators/getUser.decorator';
import { User } from 'src/common/entities/user.entity';

@ApiBearerAuth()
@Controller('wholesale-request')
export class WholesaleRequestController {
  constructor(private readonly wholesaleRequestService: WholesaleRequestService) {}

  @Post('')
  async createWholesaleRequest(@ReqUser() user:User,@Body() wholesaleRequestDto: WholesaleRequestDto){
    await this.wholesaleRequestService.create(user,wholesaleRequestDto)
  }
}
